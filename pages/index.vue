<script>
import { mask } from 'vue-the-mask'

import MarknetBrand from '@/static/marknet-brand.svg'
import DefaultAvatar from '@/static/default-avatar.png'

import ImageUpload from '@/static/image-upload.png'

import InstagramIcon from '@/static/instagram-icon.svg'
import FacebookIcon from '@/static/facebook-icon.svg'
import LinkedIncon from '@/static/linkedin-icon.svg'
import TwitterIcon from '@/static/twitter-icon.svg'

import Loader from '@/components/loader'

export default {
  name: 'IndexPage',
  directives: { mask },
  components: {
    Loader
  },
  data () {
    return {
      marknetBrand: MarknetBrand,

      defaultAvatar: DefaultAvatar,
      imageUpload: ImageUpload,
      avatar: false,

      instagramIcon: InstagramIcon,
      facebookIcon: FacebookIcon,
      linkedinIcon: LinkedIncon,
      twitterIcon: TwitterIcon,

      name: '',
      job: '',

      email: '',
      phone: '',

      signature: '',

      preview: false,

      loading: false
    }
  },
  methods: {
    createSignature () {
      this.loading = true
      this.$html2canvas(document.getElementById('signature'), {
        useCORS: true,
        allowTaint: true,
        backgroundColor: 'transparent',
        scale: window.devicePixelRatio
      }).then((canvas) => {
        let imageData = canvas.toDataURL('image/png')
        imageData = imageData.replace(/^data:image\/png/, 'data:application/octet-stream')
        const file = new FileReader()
        file.onload = (e) => {}
        this.generate(imageData)
      })
    },
    generate (data) {
      const userSignature = data
      this.save(userSignature)
    },
    copySignature () {
      const table = document.getElementById('table')
      console.log(table)
      console.log(navigator.clipboard.writeText(table))
    },
    upload (e) {
      console.dir(e.target.files[0])
      const blob = new Blob([e.target.files[0]], { type: 'image/png' })
      this.avatar = URL.createObjectURL(blob)
    },
    save (data) {
      setInterval(() => {
        this.counter--
        if (this.counter === 0) {
          this.downloaded = true
        }
      }, 1000)

      this.imageData = data // this.$store.state.image.imageData
      // this.name = this.$store.state.user.name

      const imageRef = `${Math.random().toString(36).substring(7)}/assinatura.png`

      const ref = this.$fire.storage.ref().child(imageRef)
      ref.putString(this.imageData, 'data_url').then((snapshot) => {
        this.$fire.storage.ref().child(imageRef).getDownloadURL().then((url) => {
          this.loading = false
          this.signature = url
        }).catch(() => {
          this.$router.push('/')
        })
      }).catch((e) => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<template>

  <div class="page">
    <div class="form">
      <div class="field upload">
        <label for="upload">
          <img class="avatar" :src="avatar ? avatar : imageUpload" alt="Avatar" width="82" height="82">
          <span>Enviar imagem</span>
          <input type="file" id="upload" @change="upload" hidden>
        </label>
      </div>
      <div class="field">
        <input type="text" v-model="name" placeholder="Nome e sobrenome">
      </div>
      <div class="field">
        <input type="text" v-model="job" placeholder="Profissão. Ex: Programador, Analista de suporte">
      </div>
      <div class="field">
        <input type="text" v-mask="'(##) #########'" v-model="phone" placeholder="Telefone (Não use o telefone particular)">
      </div>
      <div class="field">
        <input type="text" v-model="email" placeholder="Email">
      </div>
    </div>

    <div class="button-container">
      <!-- <button class="button" @click="preview = !preview">Preview</button> -->
      <loader v-if="loading" />
      <button v-else class="button" @click="createSignature()">
        Gerar assinatura
      </button>
    </div>

    <h2 class="title-section">Preview</h2>

    <div class="border-content" id="signature">
      <div class="profile">
        <img :class="`${avatar ? 'avatar' : '' }`" :src="avatar ? avatar : defaultAvatar" alt="Avatar" width="82" height="82">
        <img :src="marknetBrand" alt="Avatar" width="86">
        <span class="url-site">www.marknet.com.br</span>
      </div>
      <span class="divider"></span>
      <div class="signature">
        <div class="person-content">
          <div class="person-data">
            <h1 class="name">{{ name ? name : 'Nome' }}</h1>
            <span class="job">{{ job ? job : 'Profissão' }}</span>
            <span class="line-span"></span>
          </div>
          <div class="social-links">
            <span><img :src="instagramIcon" alt="Instagram Logo" width="20"></span>
            <span><img :src="facebookIcon" alt="Facebook Logo" width="20"></span>
            <span><img :src="linkedinIcon" alt="Linkedin Logo" width="20"></span>
            <span><img :src="twitterIcon" alt="Twitter Logo" width="20"></span>
          </div>
        </div>
        <div class="footer">
          <div class="phone">
            <span class="label">Phone:</span>
            <span class="phone-content">{{ phone ? phone : '(44) 00000000' }}</span>
          </div>
          <div class="email">
            <span class="label">Email:</span>
            <span class="email-content">{{ email ? email : 'user@marknet.com.br' }}</span>
          </div>
          <p class="address">Rua Alvares Cabral, 303 - Zona 01, Cianorte - PR, 87200-177</p>
        </div>
      </div>
    </div>

    <div class="modal-preview" v-if="signature" @click.self="signature = ''">
      <button class="button button-close" @click.self="signature = ''">Fechar</button>
      <img :src="signature" alt="Assinatura de email" v-if=" signature !== ''">
      <a class="button" :href="signature" target="_blank">Baixar</a>
    </div>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;800;900&family=Roboto+Mono:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

:root {
  --primary: #990DE6;
  --gradient: linear-gradient(238.91deg, #FF0000 -42.78%, #FF0078 4.53%, #A800FF 51.85%);
}

* {
  margin: 0;
  padding: 0;
  font-weight: 600;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.modal-preview {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0,0,0,.8);
}

.button-container {
  gap: 20px;
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: center;
}

.title-section {
  color: #FFFFFF;
  font-size: 12px;
  margin: 30px auto 15px;
}

.button {
  opacity: .5;
  border: none;
  cursor: pointer;
  font-size: 12px;
  padding: 6px 6px;
  color: #FFFFFF;
  background: transparent;
  text-transform: uppercase;
}

.button:hover {
  opacity: 1;
}

.button-close {
  top: 20px;
  right: 20px;
  position: absolute;
}

.page {
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--gradient);
}

.form {
  gap: 5px;
  width: 420px;
  display: flex;
  flex-direction: column;
}

.form .field input {
  outline: none;
  width: 100%;
  border: none;
  padding: 12px 20px;
}

.border-content {
  width: 630px;
  height: 194px;
  display: flex;
  align-items: center;
  border: 1px solid #DDDDDD;
  background-color: #FFFFFF;
}

.profile {
  gap: 8px;
  height: 100%;
  display: flex;
  padding-left: 20px;
  align-items: center;
  padding-right: 20px;
  flex-direction: column;
  justify-content: center;
}

.url-site {
  font-size: 12px;
  color: #9a9a9a;
}

.divider {
  width: 1px;
  height: 70%;
  display: block;
  background-color: #DDDDDD;
}

.avatar {
  border-radius: 100%;
  border: 4px solid var(--primary);
}

.signature {
  flex: 1;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: column;
}

.person-content  {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.footer {
  gap: 4px;
  display: flex;
  flex-direction: column;
}

.phone .label,
.email .label {
  color: #9a9a9a;
  font-size: 12px;
  text-transform: uppercase;
  font-family: 'Roboto Mono', monospace;
}

.phone-content,
.email-content {
  font-size: 14px;
  color: var(--primary);
}

.address {
  color: #9a9a9a;
  margin-top: 4px;
  font-size: 12px;
}

.name {
  font-size: 18px;
  color: #565656;
}

.job {
  color: #9a9a9a;
  font-size: 12px;
}

.line-span {
  width: 42px;
  height: 2px;
  display: block;
  margin: 8px 1px 15px;
  background-color: var(--primary);
}

.social-links {
  display: flex;
  gap: 12px;
}

/* UPLOAD */

.field.upload {
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.upload img {
  cursor: pointer;
}

.field.upload span {
  display: block;
  font-size: 12px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 30px;
  cursor: pointer;
}
</style>
