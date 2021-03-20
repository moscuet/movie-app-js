export const footer = () => {
  const footerHtmlString = `
  <!-- FOOTER START -->
       <footer class="footer">       
        
        <div class="footer--top">
          <div class="col">
          <p>Company</p>
          <ul>
            <li>About</li>
            <li>Movies</li>
            <li>Services</li>
            <li>Get in touch</li>
          </ul>
        </div>

        <div class="col">
          <p>Accounts</p>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Get in touch</li>
          </ul>
        </div>

        <div class="col">
          <p>Support</p>
          <ul>
            <li>Contact us</li>
            <li>Web chat</li>
          </ul>
        </div>

        <div class="col">
          <p>Social</p>
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        </div>

        <div class="footer--bottom">
          <p>&copy; 2021 BC Vanilla Movies</p>
        </div>

        <div class="footer__scroll-to-top">
          <a href="#header">
            <i class="fas fa-angle-double-up"></i>
          </a>
        </div>

       </footer>
    `;

  return footerHtmlString;
};
