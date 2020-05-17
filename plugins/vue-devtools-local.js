import devtools from '@vue/devtools'

if (process.env.vueDevtoolsLocal === 'true') {
  devtools.connect(/* host, port */)
}
