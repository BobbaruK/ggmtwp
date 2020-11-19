<?php
/**
  * @package cssecoST
  * includes/front/template-parts/contact/contact_section2.php
  */
?>

<section id="section2" class="getintouch">
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <h2 class="bull line line_left"><span>Get in touch</span></h2>
        <ul>
          <li>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="mail">
                <circle id="mail_inner_circle" cx="23" cy="23" r="22" fill="white" stroke="black"/>
                <g id="mail_envelope">
                  <path id="mail_envelope_2" d="M33 15L34.5 15.5L35 17V29L34.5 30.5L33 31H13L11.5 30.5L11 29V17L11.5 15.5L13 15H33Z" fill="white" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                  <path id="mail_envelope_bottom" d="M33 31L13 31L12 30.5L12 30L21.5 22.5L23 21.5L24.5 22.5L34 30L34 30.5L33 31Z" fill="white" stroke="black"/>
                  <path id="mail_envelope_top" d="M13 15H33L34 15.5V16L24.5 23.5L23 24.5L21.5 23.5L12 16V15.5L13 15Z" fill="white" stroke="black"/>
                </g>
              </g>
            </svg>
            info@ggmt.com
          </li>
          <li>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="location">
                <circle id="location_inner_circle" cx="23" cy="23" r="22" fill="white" stroke="black"/>
                <g id="location_2">
                  <path id="location_location" d="M22.7652 34.5435L22.7652 34.5435L15.7452 23.231C15.7452 23.2309 15.7451 23.2308 15.745 23.2307C14.9306 21.9152 14.5 20.3987 14.5 18.8438C14.5 14.2434 18.2434 10.5 22.8438 10.5C27.4441 10.5 31.1875 14.2434 31.1875 18.8438C31.1875 20.3526 30.7804 21.8307 30.0109 23.1182L23.1699 34.5404L23.1698 34.5404C23.1277 34.6109 23.052 34.6544 22.9699 34.6556H22.9665C22.8846 34.6556 22.8084 34.6132 22.7652 34.5435Z" fill="white" stroke="black"/>
                  <path id="location_location_inner_circle" d="M18.9219 18.8438C18.9219 16.6817 20.6817 14.9219 22.8438 14.9219C25.0058 14.9219 26.7656 16.6817 26.7656 18.8438C26.7656 20.9714 25.0609 22.7656 22.8438 22.7656C20.6529 22.7656 18.9219 20.9938 18.9219 18.8438Z" fill="white" stroke="black"/>
                </g>
              </g>
            </svg>
            1717 Harrison St. San Francisco, CA 94103, USA
          </li>
          <li>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="phone">
                <circle id="phone_inner_circle" cx="23" cy="23" r="22" fill="white" stroke="black"/>
                <path id="phone_phone" d="M26.9262 26.4049L26.9262 26.405L26.9307 26.4065C28.0647 26.7812 29.2599 26.9713 30.4754 26.9713C31.0399 26.9713 31.5 27.4314 31.5 27.9959V31.4754C31.5 32.0399 31.0399 32.5 30.4754 32.5C21.1155 32.5 13.5 24.8845 13.5 15.5246C13.5 14.9601 13.9601 14.5 14.5246 14.5H18.0139C18.5784 14.5 19.0384 14.9601 19.0384 15.5246V15.5247C19.0384 16.7396 19.2287 17.9328 19.604 19.071C19.7219 19.4503 19.622 19.8477 19.349 20.1203L19.324 20.1453L19.3028 20.1735L17.7375 22.2542L17.5464 22.5083L17.6954 22.7891C19.0469 25.3369 20.6453 26.9341 23.2098 28.303L23.4915 28.4534L23.7465 28.261L25.8828 26.6483L25.9132 26.6253L25.9398 26.598C26.0193 26.5164 26.1685 26.4302 26.3664 26.3859C26.5609 26.3423 26.7614 26.3487 26.9262 26.4049Z" fill="white" stroke="black"/>
              </g>
            </svg>
            123-123-1234
          </li>
        </ul>
      </div>
      <div class="col-12 col-lg-6">
        <?php require get_template_directory() . '/includes/front/templates/contact-form.php'; ?>
      </div>
    </div>
  </div>
</section>