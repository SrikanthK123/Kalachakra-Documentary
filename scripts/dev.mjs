import { spawn } from 'child_process'
import { networkInterfaces } from 'os'

const BASE_PATH = '/Kalachakra-Documentary'
const PORT = process.env.PORT || 3000

// Get local network IP
function getNetworkIP() {
  const nets = networkInterfaces()
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address
      }
    }
  }
  return null
}

let urlsPrinted = false

const child = spawn(
  'node',
  ['node_modules/next/dist/bin/next', 'dev', '--webpack'],
  {
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: false,
  }
)

function patchLine(line) {
  // When Next.js prints the "Ready" block, inject the correct basePath URLs
  if (!urlsPrinted && line.includes('✓ Ready in')) {
    urlsPrinted = true
    const ip = getNetworkIP()
    const localUrl  = `http://localhost:${PORT}${BASE_PATH}`
    const networkUrl = ip ? `http://${ip}:${PORT}${BASE_PATH}` : null

    // Print the patched startup block before the Ready line
    process.stdout.write(`\n`)
    process.stdout.write(`   ▲ Next.js (Webpack)\n`)
    process.stdout.write(`   - Local:         ${localUrl}\n`)
    if (networkUrl) {
      process.stdout.write(`   - Network:       ${networkUrl}\n`)
    }
    process.stdout.write(`\n`)
  }

  // Suppress the original Local/Network lines that show the bare URL
  if (
    line.includes('- Local:') ||
    line.includes('- Network:') ||
    (line.includes('▲ Next.js') && !line.includes('basePath'))
  ) {
    return
  }

  process.stdout.write(line + '\n')
}

let buffer = ''

child.stdout.on('data', (chunk) => {
  buffer += chunk.toString()
  const lines = buffer.split('\n')
  buffer = lines.pop() // keep incomplete line in buffer
  lines.forEach(patchLine)
})

child.stderr.on('data', (chunk) => {
  process.stderr.write(chunk)
})

if (buffer) patchLine(buffer)

child.on('exit', (code) => process.exit(code ?? 0))
process.on('SIGINT',  () => child.kill('SIGINT'))
process.on('SIGTERM', () => child.kill('SIGTERM'))
