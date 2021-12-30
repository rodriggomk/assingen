<template>
  <div class="main" :style="`background-color: ${color} !important`">
    <div class="content-container">
      <div class="colors-container">
        <div v-for="i in colors" class="color" :style="`background-color: ${i.color}`" :key ="i" @click="color = i.color">
        </div>
      </div>
      <table id="capture-area" style="background-color: #FFFFFF; height: 205px; width: 580px; max-width: 580px; display: block; border: 1px solid #EFEFEF; padding:20px; padding-right: 35px; padding-left: 15px; padding-bottom: 10px; font-family: sans-serif;">
        <tbody>
          <tr>
            <td style="display: flex;">
              <div style="margin-left: 10px; display: flex; flex-direction: column; margin-top: 8px;">
                <label>
                  <img width="92" height="92" :style="`border-radius: 120px; border: 4px solid ${color};`" :src="avatar ? avatar : fileUpload" alt="">
                  <input type="file" id="file-upload" @change="uploadFile" hidden>
                </label>
                <a href="https://marknet.com.br" target="_blank" style="margin-top: 15px; margin-bottom: 8px;">
                  <svg width="100" height="22" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M108.274 4.19977V1.60353H120V4.19977H108.274ZM102.528 7.10146V9.6977H98.2477V7.10146H102.528ZM93.5025 1.60353H103.553V4.19977H96.0914V12.9048H103.553V15.5011H93.5025V1.60353ZM78.5787 6.94874V15.5011H75.9898V1.60353H76.9036L88.1893 12.9216V15.4247H87.1751L78.5787 6.94874ZM85.5838 1.60353H88.1726V8.1705L85.5838 5.57426V1.60353ZM45.0761 15.5011L41.7259 9.6977H38.9848V15.5011H36.3959V7.10146H43.0964C44.2096 7.08313 44.8934 6.57305 44.9239 5.57426C44.8934 4.66252 44.1898 4.23643 43.0964 4.19977H36.3959V1.60353H42.4873C45.7142 1.60353 47.3604 2.91082 47.3604 5.57426C47.3604 7.57795 46.468 8.844 44.7716 9.39226L48.2741 15.5011H45.0761ZM25.1863 5.25354L21.1675 15.5011H18.1218L23.7563 1.60353H26.4975L32.132 15.5011H29.0863L25.1863 5.25354ZM11.1168 7.25418L6.84518 12.0038L6.5802 11.709L6.59695 11.6831L0 4.35249V1.60353H0.913706L6.84518 8.39653L12.7919 1.60353H13.7056V15.5011H11.1168V7.25418ZM2.58883 15.5011H0V8.9341L2.58883 11.8358V15.5011ZM115.431 15.5011H112.843V7.10146H115.431V15.5011Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M53.6041 17.1047V10.9027L64.5594 0H70.6599L53.6041 17.1047ZM53.6041 0H59.898L53.6041 6.31193V0ZM64.4833 10.8508L70.6599 16.9794H58.4589L61.3827 13.9602L64.4833 10.8508Z" :fill="color"/>
                    <path d="M42.7598 21.8597C43.27 22.1453 43.6735 22.538 43.9672 23.0378C44.2608 23.5376 44.4092 24.0879 44.4092 24.6918C44.4092 25.2957 44.2608 25.8431 43.9672 26.34C43.6735 26.8368 43.27 27.2295 42.7539 27.5151C42.2407 27.8007 41.6711 27.9435 41.0452 27.9435H38.4525V21.4313H41.063C41.683 21.4313 42.2466 21.5741 42.7598 21.8597ZM42.4276 27.0123C42.8369 26.7773 43.1603 26.456 43.3976 26.0484C43.6349 25.6408 43.7565 25.1886 43.7565 24.6918C43.7565 24.195 43.6349 23.7428 43.3946 23.3323C43.1543 22.9217 42.8251 22.6004 42.4157 22.3624C42.0034 22.1274 41.5495 22.0084 41.0541 22.0084H39.0933V27.3633H41.0808C41.5703 27.3663 42.0212 27.2473 42.4276 27.0123Z" fill="black"/>
                    <path d="M48.0015 21.4313H48.6423V27.9435H48.0015V21.4313Z" fill="black"/>
                    <path d="M57.4319 24.7573H57.9985V27.1432C57.684 27.411 57.3162 27.6192 56.8979 27.7709C56.4797 27.9227 56.0555 28 55.6194 28C55.0053 28 54.4417 27.8513 53.9256 27.5538C53.4094 27.2563 52.9971 26.8517 52.6945 26.343C52.3919 25.8342 52.2406 25.2779 52.2406 24.674C52.2406 24.0731 52.3919 23.5197 52.6945 23.017C52.9971 22.5142 53.4124 22.1156 53.9345 21.821C54.4565 21.5265 55.0291 21.3778 55.6491 21.3778C56.0881 21.3778 56.5153 21.4551 56.9276 21.6098C57.3399 21.7645 57.7018 21.9817 58.0193 22.2613L57.6484 22.7195C57.3815 22.4725 57.0759 22.2792 56.7288 22.1453C56.3818 22.0114 56.0228 21.946 55.652 21.946C55.1507 21.946 54.6879 22.068 54.2667 22.3149C53.8455 22.5588 53.5103 22.892 53.264 23.3055C53.0149 23.722 52.8932 24.1772 52.8932 24.674C52.8932 25.1768 53.0178 25.6379 53.264 26.0574C53.5103 26.4768 53.8484 26.81 54.2726 27.054C54.6968 27.3009 55.1596 27.4229 55.6609 27.4229C55.9694 27.4229 56.2779 27.3723 56.5865 27.2682C56.892 27.167 57.1768 27.0212 57.4378 26.8338V24.7573H57.4319Z" fill="black"/>
                    <path d="M62.0655 21.4313H62.7062V27.9435H62.0655V21.4313Z" fill="black"/>
                    <path d="M66.0138 21.4224H70.9471V22.0085H68.8023V27.9435H68.1616V22.0085H66.0168V21.4224H66.0138Z" fill="black"/>
                    <path d="M78.4967 27.9435L77.7254 26.212H74.1212L73.3588 27.9435H72.6706L75.5955 21.4313H76.263L79.1879 27.9435H78.4967ZM74.3733 25.6349H77.4762L75.9159 22.1126L74.3733 25.6349Z" fill="black"/>
                    <path d="M82.445 21.4313H83.0858V27.3663H85.9455V27.9435H82.4421V21.4313H82.445Z" fill="black"/>
                  </svg>
                </a>
                <!-- <img style="margin-top: 25px; margin-bottom: 15px;" width="120" height="28" src="./img/logo-marknet.png" alt="">  -->
              </div>
              <span style="display: block; height: 160px; border-right: 1px solid #EFEFEF; margin: auto 30px;"></span>
              <div style="display: flex; flex-direction: column; justify-content: space-between;">
                <div style="display: flex; width: 100%; justify-content: space-between;">
                  <div>
                    <!-- <h1 style="margin-left: 0; font-size: 18px;">Rodrigo Andrade</h1> -->
                    <input v-model="name" style="width: 200px; font-weight: bold; outline: none; padding: 0; border: none; margin-left: 0; font-size: 18px;" type="text" value="Seu nome aqui" placeholder="Seu nome aqui">
                    <input v-model="profession" style="outline: none; border: none; margin-left: 0; margin-top: 1px; color: #727272; font-size: 14px; padding: 5px 0; z-index: 500" type="text" value="Sua profissão aqui" placeholder="Sua profissão aqui">
                    <!-- <p style="margin-left: 0; margin-top: 5px; color: #727272; font-size: 14px;">UX Designer</p> -->
                    <span :style="`margin-left: 2px; margin-top: 10px; display: block; width: 42px; height: 2px; background-color: ${color};`"></span>
                  </div>
                  <div style="display: flex; margin-top: 5px; position: abolute; right: 10px;">
                    <a href="" style="text-decoration: none; margin-left: 6px;">
                      <!-- <img src="./img/instagram-icon.png" alt="">  -->
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1.66667C12.2642 1.66667 12.5467 1.675 13.435 1.71667C14.3225 1.75833 14.9267 1.8975 15.4584 2.10417C16.0084 2.31583 16.4717 2.6025 16.935 3.065C17.3588 3.48158 17.6866 3.98549 17.8959 4.54167C18.1017 5.0725 18.2417 5.6775 18.2834 6.565C18.3225 7.45333 18.3334 7.73583 18.3334 10C18.3334 12.2642 18.325 12.5467 18.2834 13.435C18.2417 14.3225 18.1017 14.9267 17.8959 15.4583C17.6873 16.0148 17.3593 16.5188 16.935 16.935C16.5183 17.3586 16.0144 17.6865 15.4584 17.8958C14.9275 18.1017 14.3225 18.2417 13.435 18.2833C12.5467 18.3225 12.2642 18.3333 10 18.3333C7.73585 18.3333 7.45335 18.325 6.56502 18.2833C5.67752 18.2417 5.07335 18.1017 4.54169 17.8958C3.98529 17.6871 3.48129 17.3591 3.06502 16.935C2.64119 16.5185 2.3133 16.0146 2.10419 15.4583C1.89752 14.9275 1.75835 14.3225 1.71669 13.435C1.67752 12.5467 1.66669 12.2642 1.66669 10C1.66669 7.73583 1.67502 7.45333 1.71669 6.565C1.75835 5.67667 1.89752 5.07333 2.10419 4.54167C2.31272 3.98515 2.64069 3.4811 3.06502 3.065C3.48141 2.64103 3.98538 2.31311 4.54169 2.10417C5.07335 1.8975 5.67669 1.75833 6.56502 1.71667C7.45335 1.6775 7.73585 1.66667 10 1.66667ZM10 5.83333C8.89495 5.83333 7.83514 6.27232 7.05374 7.05372C6.27234 7.83512 5.83335 8.89493 5.83335 10C5.83335 11.1051 6.27234 12.1649 7.05374 12.9463C7.83514 13.7277 8.89495 14.1667 10 14.1667C11.1051 14.1667 12.1649 13.7277 12.9463 12.9463C13.7277 12.1649 14.1667 11.1051 14.1667 10C14.1667 8.89493 13.7277 7.83512 12.9463 7.05372C12.1649 6.27232 11.1051 5.83333 10 5.83333ZM15.4167 5.625C15.4167 5.34873 15.3069 5.08378 15.1116 4.88843C14.9162 4.69308 14.6513 4.58333 14.375 4.58333C14.0988 4.58333 13.8338 4.69308 13.6384 4.88843C13.4431 5.08378 13.3334 5.34873 13.3334 5.625C13.3334 5.90127 13.4431 6.16622 13.6384 6.36157C13.8338 6.55692 14.0988 6.66667 14.375 6.66667C14.6513 6.66667 14.9162 6.55692 15.1116 6.36157C15.3069 6.16622 15.4167 5.90127 15.4167 5.625ZM10 7.5C10.6631 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.6631 12.5 10 12.5C9.33698 12.5 8.70109 12.2366 8.23225 11.7678C7.76341 11.2989 7.50002 10.663 7.50002 10C7.50002 9.33696 7.76341 8.70107 8.23225 8.23223C8.70109 7.76339 9.33698 7.5 10 7.5Z" :fill="color"/>
                      </svg>
                    </a>
                    <a href="" style="text-decoration: none; margin-left: 6px;">
                      <!-- <img src="./img/facebook-icon.png" alt=""> -->
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.835 17.5V11.695H14.7792L15.07 9.43833H12.835V7.99833C12.835 7.345 13.0167 6.89917 13.9533 6.89917H15.1483V4.88083C14.5698 4.81945 13.9884 4.78969 13.4067 4.79167C11.6842 4.79167 10.505 5.84333 10.505 7.775V9.43833H8.55667V11.695H10.505V17.5H3.33333C3.11232 17.5 2.90036 17.4122 2.74408 17.2559C2.5878 17.0996 2.5 16.8877 2.5 16.6667V3.33333C2.5 3.11232 2.5878 2.90036 2.74408 2.74408C2.90036 2.5878 3.11232 2.5 3.33333 2.5H16.6667C16.8877 2.5 17.0996 2.5878 17.2559 2.74408C17.4122 2.90036 17.5 3.11232 17.5 3.33333V16.6667C17.5 16.8877 17.4122 17.0996 17.2559 17.2559C17.0996 17.4122 16.8877 17.5 16.6667 17.5H12.835Z" :fill="color"/>
                      </svg>
                    </a>
                    <a href="" style="text-decoration: none; margin-left: 6px;">
                      <!-- <img src="./img/linkedin-icon.png" alt=""> -->
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2792 15.2825H13.0583V11.8017C13.0583 10.9717 13.0417 9.90333 11.9 9.90333C10.7425 9.90333 10.5658 10.8067 10.5658 11.7408V15.2825H8.34417V8.125H10.4775V9.1H10.5067C10.805 8.53833 11.53 7.94417 12.6133 7.94417C14.8633 7.94417 15.28 9.42583 15.28 11.3533V15.2825H15.2792ZM5.83583 7.14583C5.6663 7.14605 5.49838 7.11281 5.34172 7.04801C5.18506 6.9832 5.04272 6.88812 4.92288 6.7682C4.80304 6.64828 4.70804 6.50588 4.64334 6.34918C4.57864 6.19247 4.5455 6.02454 4.54583 5.855C4.546 5.59986 4.62182 5.3505 4.7637 5.13846C4.90558 4.92641 5.10716 4.76119 5.34294 4.66371C5.57872 4.56623 5.83811 4.54085 6.08832 4.59078C6.33852 4.64072 6.5683 4.76373 6.74859 4.94426C6.92888 5.12478 7.0516 5.35472 7.10121 5.60498C7.15082 5.85525 7.12511 6.11461 7.02732 6.35026C6.92953 6.58592 6.76406 6.78728 6.55183 6.92889C6.33959 7.0705 6.09014 7.146 5.835 7.14583H5.83583ZM6.94917 15.2825H4.72167V8.125H6.95V15.2825H6.94917ZM16.3917 2.5H3.6075C2.99417 2.5 2.5 2.98333 2.5 3.58083V16.4192C2.5 17.0167 2.995 17.5 3.60667 17.5H16.3883C17 17.5 17.5 17.0167 17.5 16.4192V3.58083C17.5 2.98333 17 2.5 16.3883 2.5H16.3908H16.3917Z" :fill="color"/>
                      </svg>
                    </a>
                    <a href="" style="text-decoration: none; margin-left: 6px;">
                      <!-- <img src="./img/twitter-icon.png" alt=""> -->
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4683 4.71333C17.8321 4.99475 17.1574 5.17956 16.4666 5.26167C17.1948 4.8262 17.7397 4.14085 18 3.33333C17.3166 3.74 16.5675 4.025 15.7866 4.17917C15.2622 3.61798 14.5669 3.2458 13.8091 3.12049C13.0513 2.99517 12.2733 3.12374 11.596 3.48621C10.9188 3.84868 10.3803 4.42474 10.0642 5.12483C9.74818 5.82492 9.67227 6.60982 9.84832 7.3575C8.46257 7.28805 7.10693 6.92794 5.86939 6.30055C4.63185 5.67317 3.54009 4.79254 2.66498 3.71583C2.35522 4.24788 2.19245 4.85269 2.19332 5.46833C2.19332 6.67667 2.80832 7.74417 3.74332 8.36917C3.18999 8.35175 2.64884 8.20232 2.16498 7.93334V7.97667C2.16515 8.78142 2.44362 9.56135 2.95319 10.1842C3.46275 10.8071 4.17205 11.2346 4.96082 11.3942C4.44716 11.5334 3.90857 11.5539 3.38582 11.4542C3.60821 12.1469 4.04166 12.7527 4.62548 13.1868C5.2093 13.6209 5.91426 13.8615 6.64165 13.875C5.91872 14.4428 5.09096 14.8625 4.20572 15.1101C3.32047 15.3578 2.39509 15.4285 1.48248 15.3183C3.07556 16.3429 4.93006 16.8868 6.82415 16.885C13.235 16.885 16.7408 11.5742 16.7408 6.96833C16.7408 6.81833 16.7366 6.66667 16.73 6.51833C17.4124 6.02514 18.0013 5.41418 18.4691 4.71417L18.4683 4.71333Z" :fill="color"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div>
                  <p style="margin: 0;">
                    <span style="display: inline-block; width: 40px; font-size: 10px; text-transform: uppercase; font-weight: light;">Phone:</span>
                    <span style="text-decoration: none; color: #AF1EFC; font-size: 14px;" href="#tel:44998370204">
                      <input v-mask="'## - 9 ########'" placeholder="Seu telefone aqui" :style="`border: none; outline: none; color: ${color}; font-size: 14px;`" v-model="phone" type="text">
                      <!-- 44 - 9 9837-0204 -->
                    </span>
                  </p>
                  <p style="margin-top: 0;">
                    <span style="display: inline-block; width: 40px; font-size: 10px; text-transform: uppercase; font-weight: light;">Email:</span>
                    <span :style="`text-decoration: none; color: ${color}; font-size: 14px;`" href="#mailto:rodrigo@marknet.com.br">
                      <input placeholder="Seu email aqui" :style="`border: none; outline: none; color: ${color}; font-size: 14px;`" v-model="email" type="text">
                      <!-- rodrigo@marknet.com.br -->
                    </span>
                  </p>
                  <p style="margin-top: 10px; font-size: 11px; color: #727272;">
                    Rua Alvares Cabral, 303 - Zona 01<br> Cianorte - PR, 87200-177
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="button-container">
      <button class="button" id="button-generate" @click="generateSignature">Gerar Assinatura</button>
      <a class="button disabled" id="button-download">Baixar</a>
    </div>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import FileUpload from './../static/file-upload.png'
export default {
  name: 'IndexPage',
  directives: { mask },
  data () {
    return {
      name: '',
      profession: '',
      phone: '',
      email: '',
      color: '#AF1EFC',
      fileUpload: FileUpload,
      avatar: '',
      colors: [
        { color: '#250137' },
        { color: '#5C058A' },
        { color: '#990DE6' },
        { color: '#A810FC' },
        { color: '#AF1EFC' },
        { color: '#CF73FD' },
        { color: '#EED0FD' },
        { color: '#8B0134' },
        { color: '#B90244' },
        { color: '#E80457' },
        { color: '#FF055E' },
        { color: '#FE196D' },
        { color: '#FE458A' },
        { color: '#FF72A7' },
        { color: '#0BB968' },
        { color: '#0CD075' },
        { color: '#0CE682' },
        { color: '#11FE8F' },
        { color: '#3FFEA2' },
        { color: '#6BFEB6' },
        { color: '#95FECB' },
        { color: '#159BB8' },
        { color: '#19AED0' },
        { color: '#19C2E7' },
        { color: '#1DD4FD' },
        { color: '#42DBFE' },
        { color: '#56DFFE' },
        { color: '#81E7FE' }
      ]
    }
  },
  mounted () {},
  methods: {
    uploadFile (e) {
      const av = e.target.files[0]
      const blob = new Blob([av], { type: 'image/png' })
      this.avatar = URL.createObjectURL(blob)
    },
    generateSignature () {
      if (this.name === '' || this.profession === '' || this.phone === '' || this.email === '') {
        alert('Preencha todos os campos para gerar a assinatura.')
      } else {
        // const signature = document.getElementById('signature')
        this.$html2canvas(document.getElementById('capture-area'), {
          allowTaint: true,
          backgroundColor: 'transparent',
          useCORS: true
          // scale: window.devicePixelRatio,
        }).then(
          (canvas) => {
            // const signature = document.getElementById('signature')

            // const modal = document.getElementById('modal')
            const buttonGenerate = document.getElementById('button-generate')
            // const signature = document.getElementById('signature')
            const downloadButton = document.getElementById('button-download')

            let imageData = canvas.toDataURL('image/png')

            imageData = imageData.replace(/^data:image\/png/, 'data:application/octet-stream')

            downloadButton.classList.remove('disabled')
            buttonGenerate.classList.add('disabled')
            downloadButton.setAttribute('download', 'screenshot.png')
            downloadButton.setAttribute('href', imageData)
            // signature.appendChild(canvas)

            // signature.setAttribute('src', imageData)

            // modal.classList.remove('hidden')
            // this.generate(imageData)
            /* const reader = new FileReader()
            reader.onload = function (e) {
              // get loaded data and render thumbnail.
              document.getElementById('signature').setAttribute('src', e.target.result)
              console.log('imagem:')
              console.log(e.target.result)
            }
            reader.readAsDataURL(canvas.toBlob()) */
            // console.log('ref: ')
            // console.log(this.$fire.storage.ref().child())

            /* const blob = new Blob([imageData], { type: 'image/png' })
            console.log(URL.createObjectURL(blob))

            const ref = this.$fire.storage.ref().child(`${Math.random().toString(36).substring(7)}.png`)
            ref.putString(blob).then((snapshot) => {
              console.log(snapshot)
            }) */

            const file = new FileReader()
            // let res = null

            file.onload = (e) => {
              // const res = e.target.result
              // console.log(e.target.result)
              // this.generate(e.target.result)
              /* const ref = this.$fire.storage.ref().child(`${Math.random().toString(36).substring(7)}.png`)
              ref.put(e.target.result).then((snapshot) => {
                console.log(snapshot)
              }) */
            }

            // file.readAsDataURL(blob)

            // const file2 = new File([blob], `${Math.random().toString(36).substring(7)}.png`, { type: 'image/png' })
            // console.log(file2)
            this.generate(imageData)
          }
        )
      }
    },
    generate (data) {
      /* console.log(data)
      const ref = this.$fire.storage.ref().child(`${data.name}`)
      ref.put(data).then((snapshot) => {
        console.log(snapshot)
      }) */

      const userSignature = data
      /* const userSignature = data
      const ref = this.$fire.storage.ref().child(`${Math.random().toString(36).substring(7)}.png`)
      console.log(ref)
      try {
        const snapshot = ref.put(userSignature)
        console.log(snapshot)
      } catch (e) {
        alert(e.message)
      } */
      this.$store.commit('image/setImageData', userSignature)
      this.$store.commit('user/setUserName', this.name)
      this.$router.push('/signature')
    },
    copySignature () {
      // const modal = document.getElementById('modal')
      const table = document.getElementById('table')
      console.log(table)
      // modal.classList.add('hidden')
      console.log(navigator.clipboard.writeText(table))
      // table.select()
    }
  }
}
</script>

<style>

* {
  padding: 0;
  margin: 0;
}

.main {
  /* background: linear-gradient(252.33deg, #AF1EFC 0.58%, #5C058A 100%); */
  display: flex;
  width: 100vw;
  min-width: 970px;
  min-height: 500px;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button-container {
  width: 970px;
  display: flex;
  justify-content: flex-end;
}

.content-container {
  display: flex;
}

.colors-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 320px;
  max-height: 165px;
  padding: 20px;
  justify-content: center;
  background: #FFFFFF;
  margin-right: 30px;
}

.color {
  margin: 1px 1px;
  width: 40px;
  height: 40px;
  display: flex;
  cursor: pointer;
}

.button {
  display: inline-block;
  margin-top: 20px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #FFFFFF;
  padding: 12px 30px;
  font-size: 14px;
  font-family: sans-serif;
  text-decoration: none;
  color: #FFFFFF;
  opacity: .5;
}

.button:hover {
  opacity: 1;
}

.disabled {
  display: none;
}

#table {
  margin-top: 30px;
}

#modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: rgba(0, 0, 0, .8);
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.hidden {
  display: none !important;
}

#file-upload {

}
</style>
