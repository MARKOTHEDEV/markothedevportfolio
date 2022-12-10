import { createGlobalStyle} from 'styled-components'


export const lightTheme = {

}

export const darkTheme = {
}


export const GlobalStyles = createGlobalStyle`
  @font-face{
    font-family: 'SpaceGroteskBold';
    src: url('../assets/fonts/static/SpaceGrotesk-Bold.ttf') format('truetype');
    font-weight:normal;
    font-style: normal;
  }


  @font-face{
    font-family: 'SpaceGroteskMedium';
    src: url('../assets/fonts/static/SpaceGrotesk-Medium.ttf') format('truetype');
    font-weight:bold;
    font-style: normal;
  }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    transition: all 0.50s linear;
    font-family: 'SpaceGroteskBold';
  }
  h1,h2, h3 ,h4 ,h5{
    font-family: 'SpaceGroteskMedium';
  }

  li{
  list-style-type: none;
}

a{
  text-decoration: none;
}

.Toastify__toast-icon svg{
  color: white !important;
  fill: white;
}

.toast-message {
    color: #fff;
    font-size: 20px;
    /* width: 34vw; */
    background-color: #38a169;
    min-width: 300px;
    padding: 1rem 1rem;
}
.toast-message-err{
    color: #fff;
    font-size: 20px;
    /* width: 34vw; */
    background-color: #e53e3e;
    min-width: 300px;
    padding: 1rem 1rem;
}
`


const view = `"{
  "items":
  [
    {
      "id":"2",
      "name":"Baby Spinach",
      "slug":"baby-spinach","unit":"2Pfund","is_digital":false,
      "image":"https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/conversions/BabySpinach-thumbnail.jpg",
      "stock":10,"price":0.6,"quantity":1,"itemTotal":0.6
    }],
    "isEmpty":false,"totalItems":1,"totalUniqueItems":1,"total":0.6,"meta":null}"`