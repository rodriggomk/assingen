<template>
  <span v-if="!downloaded">
    Aguarde {{ counter }} segundos. Não atualize a página.
  </span>
  <table v-else id="table" :style="`background-image: url(${image}); background-repeat: no-repeat; position: relative; height: 205px; width: 580px; max-width: 580px; display: block; font-family: sans-serif;` ">
    <tr>
      <td style="width: 160px;">
        <a style="width: 100px; height: 26px; display: block; margin-top: 125px; margin-left: 16px;" href="https://marknet.com.br" target="_blank"></a>
      </td>
      <td style="width: 280px;">
        <a style="background: transparent; display: block; width: 140px; height: 205px; font-size: 0;">
          {{ name }}
        </a>
      </td>
      <td style="display: flex;">
        <a style="background: transparent; min-width: 20px; min-height: 20px; display: inline-block; margin-left: 2px; margin-top: 25px; font-size: 0;" href="https://marknet.com.br/instagram" target="_blank"></a>
        <a style="background: transparent; min-width: 20px; min-height: 20px; display: inline-block; margin-top: 25px; font-size: 0;" href="https://marknet.com.br/facebook" target="_blank"></a>
        <a style="background: transparent; min-width: 30px; min-height: 20px; display: inline-block; margin-top: 25px; font-size: 0;" href="https://marknet.com.br/linkedin" target="_blank"></a>
        <a style="background: transparent; min-width: 20px; min-height: 20px; display: inline-block; margin-top: 25px; font-size: 0;" href="https://marknet.com.br/twitter" target="_blank"></a>
      </td>
    </tr>
  </table>
</template>

<script>

window.addEventListener('keyup', (e) => {
  if (e.ctrlKey && e.key === 'a') {
    alert('Assinatura selecionada.')
  } if (e.ctrlKey && e.key === 'c') {
    alert('Assinatura copiada.')
  }
})

export default {
  name: 'Signature-result',
  data () {
    return {
      imageData: '',
      image: '',
      name: '',
      downloaded: false,
      counter: 10
    }
  },
  mounted () {
    setInterval(() => {
      this.counter--
      if (this.counter === 0) {
        this.downloaded = true
      }
    }, 1000)

    this.imageData = this.$store.state.image.imageData
    this.name = this.$store.state.user.name

    const imageRef = `${Math.random().toString(36).substring(7)}/avatar.png`

    const ref = this.$fire.storage.ref().child(imageRef)
    ref.putString(this.imageData, 'data_url').then((snapshot) => {
      this.$fire.storage.ref().child(imageRef).getDownloadURL().then((url) => {
        this.image = url
      }).catch(() => {
        this.$router.push('/')
      })
    }).catch((e) => {
      this.$router.push('/')
    })

    alert(
      'Tecle \'CTRL + A\' para selecionar tudo e \'CTRL + C\' para copiar a assinatura que será exibida. Não atualize a página.'
    )
  },
  methods: {}
}
</script>
