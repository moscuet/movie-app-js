export const footer = () => {
  const footerHtmlString = `
  <!-- FOOTER START -->
       <footer class="footer">
        This is the footer
        <section>
        <div class="contain">
        <div class="col">
          <h1>Lost?</h1>
        <ul>
          <div class="footer-icons">
            <li><div class="home">
            <i class="fas fa-home"></i></li>
            <li><div class="wishlist">
            <i class="fas fa-heart"></i></li>
            <li><div class="search">
            <i class="fas fa-search"></i></li>
            <li><div class="signin">
            <i class="fas fa-sign-in-alt"></i></li>
        </ul>
        </div>
        <div class="col">
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Movies</li>
            <li>Services</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div class="col">
          <h1>Accounts</h1>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div class="col">
          <h1>Support</h1>
          <ul>
            <li>Contact us</li>
            <li>Web chat</li>
          </ul>
        </div>
        <div class="col social">
          <h1>Social</h1>
      <ul>
        <li>
          <div class="socialmedia-icons">
          <div class="twitter">
             <i class="fab fa-twitter"></i>
             </li>
          <li>
          <div class="facebook">
          <i class="fab fa-facebook-f"></i>
          </li>
          <li>
          <div class="instagram">
          <i class="fab fa-instagram"></i>
          </li>
          </ul>
        </div>
        <div class="col">
          <h1>Copyright</h1>
          <ul>
            <li><p id="copyright">&copy; Vanilla Movie 2021</p></li>
          </ul>
        </div>
      <div class="clearfix"></div>
      </div>
      </div>
  <br>
  </div>
  </div>
  </section> 
       </footer>
    `;

  return footerHtmlString;
};
