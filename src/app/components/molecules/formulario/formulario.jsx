import './formulario.css'

export default function formulario() {
  return (
    <div>
       <form class="form">
  <span class="title">Subscribe a SAMSUNG</span>
  <p class="description">Aprovecha los beneficios de la membresia de Samsung </p>
  <div>
    <input placeholder="Enter your email" type="email" name="email" id="email-address" />
    <button type="submit">Subscribe</button>
  </div>
</form>
    </div>
  )
}
