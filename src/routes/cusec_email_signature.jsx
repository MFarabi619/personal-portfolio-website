import React from 'react';
import './styles.scss';
import cusecLogo from './images/cusec-logo-2024.png';
import facebookIcon from './images/facebook-icon.png';
import instagramIcon from './images/instagram-icon.png';
import linkedinIcon from './images/linkedin-icon.png';
import youtubeIcon from './images/youtube-icon.png';

function CusecEmailSignature() {
  return (
    <>
      <div className="email-signature">
        <table>
          <tbody>
            <tr>
              <td style={{ padding: '0 12px 0 0' }} valign="middle">
                <a href="http://2023.cusec.net" style={{ textDecoration: 'none' }}>
                  <img
                    src={cusecLogo}
                    name="CUSEC 2024"
                    style={{ verticalAlign: 'middle', width: '120px' }}
                    alt="CUSEC 2024"
                  />
                </a>
              </td>
              <td style={{ borderLeft: '2px solid whitesmoke', paddingLeft: '12px' }}>
                <table>
                  <tbody>
                    <tr style={{ fontSize: '15px' }}>
                      <td>
                        <b>Your Name</b>
                        <br />
                        <i>Your Title</i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Mobile</b>:
                        <a href="tel:+1(226)123-1245">+1 (226) 123-1245</a> <br />
                        <b>Email</b>: <a href="mailto:web@cusec.net">[REPLACE]@cusec.net</a> <br />
                        <b>Website</b>: <a href="http://2023.cusec.net">2023.cusec.net</a>
                      </td>
                    </tr>
                    <tr>
                      <td id="icons" style={{ padding: '5px 0px 0px 0px' }}>
                        <a href="https://www.facebook.com/cusecofficial">
                          <img alt="facebook" src={facebookIcon} />
                        </a>
                        <a href="https://www.instagram.com/cusecofficial">
                          <img alt="instagram" src={instagramIcon} />
                        </a>
                        <a href="https://www.linkedin.com/company/cusec">
                          <img alt="linkedin" src={linkedinIcon} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCZ7j8F6h1CxD-uC0od9rHBw">
                          <img alt="youtube" src={youtubeIcon} />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CusecEmailSignature;
