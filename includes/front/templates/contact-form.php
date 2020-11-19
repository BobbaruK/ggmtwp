<?php
/**
 * @package cssecoST
 * includes/front/templates/contact-form.php
 *
 * Comment Navigation Template
 */
?>

<form action="" class="forms">
  <div class="row">
    <div class="col-12">
      <div class="form-group inputWrapper">
        <input type="text" id="name" class="form-control input name" name="name" placeholder="Name" required autocomplete="off" aria-required="true">
        <label for="name" class="label_name">
          <span class="content_name">Name</span>
        </label>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="form-group inputWrapper">
        <input type="text" id="company" class="form-control input company" name="company" placeholder="Company" required autocomplete="off" aria-required="true">
        <label for="company" class="label_company">
          <span class="content_name">Company</span>
        </label>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="form-group inputWrapper">
        <input type="email" id="email" class="form-control input email" name="email" placeholder="Email" required autocomplete="off" aria-required="true">
        <label for="email" class="label_email">
          <span class="content_name">Email</span>
        </label>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="form-group inputWrapper">
        <select id="country" class="form-control input country" name="country" required autocomplete="off" aria-required="true">
          <option id="choose" value="" data-prefix=""></option>
          <option id="AF" value="93" data-country="AF">
          Afghanistan
          </option>
          <option id="AL" value="355" data-country="AL">
          Albania
            </option>
          <option id="DZ" value="213" data-country="DZ">
          Algeria
          </option>
          <option id="AS" value="684" data-country="AS">
          American Samoa
          </option>
          <option id="AD" value="376" data-country="AD">
          Andorra
          </option>
          <option id="AO" value="244" data-country="AO">
          Angola
          </option>
          <option id="AI" value="1-264" data-country="AI">
          Anguilla
          </option>
          <option id="AQ" value="672" data-country="AQ">
          Antarctica
          </option>
          <option id="AG" value="1-268" data-country="AG">
          Antigua and Barbuda
          </option>
          <option id="AR" value="54" data-country="AR">
          Argentina
          </option>
          <option id="AM" value="374" data-country="AM">
          Armenia
          </option>
          <option id="AW" value="297" data-country="AW">
          Aruba
          </option>
          <option id="AU" value="61" data-country="AU">
          Australia
          </option>
          <option id="AT" value="43" data-country="AT">
          Austria
          </option>
          <option id="AZ" value="994" data-country="AZ">
          Azerbaijan
          </option>
          <option id="BS" value="1-242" data-country="BS">
          The Bahamas
          </option>
          <option id="BH" value="973" data-country="BH">
          Bahrain
          </option>
          <option id="BD" value="880" data-country="BD">
          Bangladesh
          </option>
          <option id="BB" value="1-246" data-country="BB">
          Barbados
          </option>
          <option id="BY" value="375" data-country="BY">
          Belarus
          </option>
          <option id="BE" value="32" data-country="BE">
          Belgium
          </option>
          <option id="BZ" value="501" data-country="BZ">
          Belize
          </option>
          <option id="BJ" value="229" data-country="BJ">
          Benin
          </option>
          <option id="BM" value="441" data-country="BM">
          Bermuda
          </option>
          <option id="BT" value="975" data-country="BT">
          Bhutan
          </option>
          <option id="BO" value="591" data-country="BO">
          Bolivia
          </option>
          <option id="BA" value="387" data-country="BA">
          Bosnia and Herzegovina
          </option>
          <option id="BW" value="267" data-country="BW">
          Botswana
          </option>
          <option id="BV" value="47" data-country="BV">
          Bouvet Island
          </option>
          <option id="BR" value="55" data-country="BR">
          Brazil
          </option>
          <option id="IO" value="246" data-country="IO">
          British Indian Ocean Territory
          </option>
          <option id="VG" value="1284" data-country="VG">
          British Virgin Islands
          </option>
          <option id="BN" value="673" data-country="BN">
          Brunei Darussalam
          </option>
          <option id="BG" value="359" data-country="BG">
          Bulgaria
          </option>
          <option id="BF" value="226" data-country="BF">
          Burkina Faso
          </option>
          <option id="MM" value="95" data-country="MM">
          Burma
          </option>
          <option id="BI" value="257" data-country="BI">
          Burundi
          </option>
          <option id="KH" value="855" data-country="KH">
          Cambodia
          </option>
          <option id="CM" value="237" data-country="CM">
          Cameroon
          </option>
          <option id="CA" value="1" data-country="CA">
          Canada
          </option>
          <option id="CV" value="238" data-country="CV">
          Cape Verde
          </option>
          <option id="KY" value="1-345 " data-country="KY">
          Cayman Islands (+1-345 )
          </option>
          <option id="CF" value="236" data-country="CF">
          Central African Republic
          </option>
          <option id="TD" value="235" data-country="TD">
          Chad
          </option>
          <option id="CL" value="56" data-country="CL">
          Chile
          </option>
          <option id="CN" value="86" data-country="CN">
          China
          </option>
          <option id="CX" value="672" data-country="CX">
          Christmas Island
          </option>
          <option id="CC" value="61" data-country="CC">
          Cocos (Keeling) Islands
          </option>
          <option id="CO" value="57" data-country="CO">
          Colombia
          </option>
          <option id="KM" value="269" data-country="KM">
          Comoros
          </option>
          <option id="CD" data-country="CD">
          Congo, Democratic Republic of the
          </option>
          <option id="CG" value="243" data-country="CG">
          Congo, Republic of the
          </option>
          <option id="CK" value="682" data-country="CK">
          Cook Islands
          </option>
          <option id="CR" value="506" data-country="CR">
          Costa Rica
          </option>
          <option id="CI" data-country="CI">
          Cote d'Ivoire
          </option>
          <option id="HR" value="385" data-country="HR">
          Croatia
          </option>
          <option id="CU" value="53" data-country="CU">
          Cuba
          </option>
          <option id="CY" value="357" data-country="CY">
          Cyprus
          </option>
          <option id="CZ" value="420" data-country="CZ">
          Czech Republic
          </option>
          <option id="DK" value="45" data-country="DK">
          Denmark
          </option>
          <option id="DJ" value="253" data-country="DJ">
          Djibouti
          </option>
          <option id="DM" value="1-767" data-country="DM">
          Dominica
          </option>
          <option id="DO" value="1-809" data-country="DO">
          Dominican Republic
          </option>
          <option id="TL" data-country="TL">
          East Timor
          </option>
          <option id="EC" value="593" data-country="EC">
          Ecuador
          </option>
          <option id="EG" value="20" data-country="EG">
          Egypt
          </option>
          <option id="SV" value="503" data-country="SV">
          El Salvador
          </option>
          <option id="GQ" value="240" data-country="GQ">
          Equatorial Guinea
          </option>
          <option id="ER" value="291" data-country="ER">
          Eritrea
          </option>
          <option id="EE" value="372" data-country="EE">
          Estonia
          </option>
          <option id="ET" value="251" data-country="ET">
          Ethiopia
          </option>
          <option id="FK" value="500" data-country="FK">
          Falkland Islands (Islas Malvinas)
          </option>
          <option id="FO" value="298" data-country="FO">
          Faroe Islands
          </option>
          <option id="FJ" value="679" data-country="FJ">
          Fiji
          </option>
          <option id="FI" value="358" data-country="FI">
          Finland
          </option>
          <option id="FR" value="33" data-country="FR">
          France
          </option>
          <option id="GF" value="594" data-country="GF">
          French Guiana
          </option>
          <option id="PF" value="689" data-country="PF">
          French Polynesia
          </option>
          <option id="TF" data-country="TF">
          French Southern and Antarctic Lands
          </option>
          <option id="GA" value="241" data-country="GA">
          Gabon
          </option>
          <option id="GM" value="220" data-country="GM">
          The Gambia
          </option>
          <option id="GE" value="995" data-country="GE">
          Georgia
          </option>
          <option id="DE" value="49" data-country="DE">
          Germany
          </option>
          <option id="GH" value="233" data-country="GH">
          Ghana
          </option>
          <option id="GI" value="350" data-country="GI">
          Gibraltar
          </option>
          <option id="GR" value="30" data-country="GR">
          Greece
          </option>
          <option id="GL" value="299" data-country="GL">
          Greenland
          </option>
          <option id="GD" value="1-473" data-country="GD">
          Grenada
          </option>
          <option id="GP" value="590" data-country="GP">
          Guadeloupe
          </option>
          <option id="GU" value="671" data-country="GU">
          Guam
          </option>
          <option id="GT" value="502" data-country="GT">
          Guatemala
          </option>
          <option id="GN" value="224" data-country="GN">
          Guinea
          </option>
          <option id="GW" value="245" data-country="GW">
          Guinea-Bissau
          </option>
          <option id="GY" value="592" data-country="GY">
          Guyana
          </option>
          <option id="HT" value="509" data-country="HT">
          Haiti
          </option>
          <option id="HM" value="1-612" data-country="HM">
          Heard Island and McDonald Islands
          </option>
          <option id="VA" value="379" data-country="VA">
          Holy See (Vatican City)
          </option>
          <option id="HN" value="504" data-country="HN">
          Honduras
          </option>
          <option id="HK" value="852" data-country="HK">
          Hong Kong (SAR)
          </option>
          <option id="HU" value="36" data-country="HU">
          Hungary
          </option>
          <option id="IS" value="354" data-country="IS">
          Iceland
          </option>
          <option id="IN" value="91" data-country="IN">
          India
          </option>
          <option id="ID" value="62" data-country="ID">
          Indonesia
          </option>
          <option id="IR" data-country="IR">
          Iran
          </option>
          <option id="IQ" value="964" data-country="IQ">
          Iraq
          </option>
          <option id="IE" value="353" data-country="IE">
          Ireland
          </option>
          <option id="IL" value="972" data-country="IL">
          Israel
          </option>
          <option id="IT" value="39" data-country="IT">
          Italy
          </option>
          <option id="JM" value="1-876" data-country="JM">
          Jamaica
          </option>
          <option id="JP" value="81" data-country="JP">
          Japan
          </option>
          <option id="JO" value="962" data-country="JO">
          Jordan
          </option>
          <option id="KZ" value="7" data-country="KZ">
          Kazakhstan
          </option>
          <option id="KE" value="254" data-country="KE">
          Kenya
          </option>
          <option id="KI" value="686" data-country="KI">
          Kiribati
          </option>
          <option id="KP" data-country="KP">
          Korea, North
          </option>
          <option id="KR" value="82" data-country="KR">
          Korea, South
          </option>
          <option id="KW" value="965" data-country="KW">
          Kuwait
          </option>
          <option id="KG" value="996" data-country="KG">
          Kyrgyzstan
          </option>
          <option id="LA" data-country="LA">
          Laos
          </option>
          <option id="LV" value="371" data-country="LV">
          Latvia
          </option>
          <option id="LB" value="961" data-country="LB">
          Lebanon
          </option>
          <option id="LS" value="266" data-country="LS">
          Lesotho
          </option>
          <option id="LR" value="231" data-country="LR">
          Liberia
          </option>
          <option id="LY" value="218" data-country="LY">
          Libya
          </option>
          <option id="LI" value="423" data-country="LI">
          Liechtenstein
          </option>
          <option id="LT" value="370" data-country="LT">
          Lithuania
          </option>
          <option id="LU" value="352" data-country="LU">
          Luxembourg
          </option>
          <option id="MO" value="853" data-country="MO">
          Macao
          </option>
          <option id="MK" value="389" data-country="MK">
          North Macedonia
          </option>
          <option id="MG" value="261" data-country="MG">
          Madagascar
          </option>
          <option id="MW" value="265" data-country="MW">
          Malawi
          </option>
          <option id="MY" value="60" data-country="MY">
          Malaysia
          </option>
          <option id="MV" value="960" data-country="MV">
          Maldives
          </option>
          <option id="ML" value="223" data-country="ML">
          Mali
          </option>
          <option id="MT" value="356" data-country="MT">
          Malta
          </option>
          <option id="MH" value="692" data-country="MH">
          Marshall Islands
          </option>
          <option id="MQ" value="596" data-country="MQ">
          Martinique
          </option>
          <option id="MR" value="222" data-country="MR">
          Mauritania
          </option>
          <option id="MU" value="230" data-country="MU">
          Mauritius
          </option>
          <option id="YT" value="262" data-country="YT">
          Mayotte
          </option>
          <option id="MX" value="52" data-country="MX">
          Mexico
          </option>
          <option id="FM" value="691" data-country="FM">
          Micronesia, Federated States of
          </option>
          <option id="MD" value="373" data-country="MD">
          Moldova
          </option>
          <option id="MC" value="377" data-country="MC">
          Monaco
          </option>
          <option id="MN" value="976" data-country="MN">
          Mongolia
          </option>
          <option id="MS" value="664" data-country="MS">
          Montserrat
          </option>
          <option id="MA" value="212" data-country="MA">
          Morocco
          </option>
          <option id="MZ" value="258" data-country="MZ">
          Mozambique
          </option>
          <option id="NA" value="264" data-country="NA">
          Namibia
          </option>
          <option id="NR" value="674" data-country="NR">
          Nauru
          </option>
          <option id="NP" value="977" data-country="NP">
          Nepal
          </option>
          <option id="NL" value="31" data-country="NL">
          Netherlands
          </option>
          <option id="AN" value="599" data-country="AN">
          Netherlands Antilles
          </option>
          <option id="NC" value="687" data-country="NC">
          New Caledonia
          </option>
          <option id="NZ" value="64" data-country="NZ">
          New Zealand
          </option>
          <option id="NI" value="505" data-country="NI">
          Nicaragua
          </option>
          <option id="NE" value="227" data-country="NE">
          Niger
          </option>
          <option id="NG" value="234" data-country="NG">
          Nigeria
          </option>
          <option id="NU" value="683" data-country="NU">
          Niue
          </option>
          <option id="NF" value="672" data-country="NF">
          Norfolk Island
          </option>
          <option id="MP" value="1-670" data-country="MP">
          Northern Mariana Islands
          </option>
          <option id="NO" value="47" data-country="NO">
          Norway
          </option>
          <option id="OM" value="968" data-country="OM">
          Oman
          </option>
          <option id="PK" value="92" data-country="PK">
          Pakistan
          </option>
          <option id="PW" value="680" data-country="PW">
          Palau
          </option>
          <option id="PA" value="507" data-country="PA">
          Panama
          </option>
          <option id="PG" value="675" data-country="PG">
          Papua New Guinea
          </option>
          <option id="PY" value="595" data-country="PY">
          Paraguay
          </option>
          <option id="PE" value="51" data-country="PE">
          Peru
          </option>
          <option id="PH" value="63" data-country="PH">
          Philippines
          </option>
          <option id="PN" value="870" data-country="PN">
          Pitcairn Islands
          </option>
          <option id="PL" value="48" data-country="PL">
          Poland
          </option>
          <option id="PT" value="351" data-country="PT">
          Portugal
          </option>
          <option id="PR" value="1-787" data-country="PR">
          Puerto Rico
          </option>
          <option id="QA" value="974" data-country="QA">
          Qatar
          </option>
          <option id="RE" value="262" data-country="RE">
          Réunion
          </option>
          <option id="RO" value="40" data-country="RO">
          Romania
          </option>
          <option id="RU" value="7" data-country="RU">
          Russia
          </option>
          <option id="RW" value="250" data-country="RW">
          Rwanda
          </option>
          <option id="SH" value="290" data-country="SH">
          Saint Helena
          </option>
          <option id="KN" value="1-869" data-country="KN">
          Saint Kitts and Nevis
          </option>
          <option id="LC" value="1-758" data-country="LC">
          Saint Lucia
          </option>
          <option id="PM" value="508" data-country="PM">
          Saint Pierre and Miquelon
          </option>
          <option id="VC" value="1-784" data-country="VC">
          Saint Vincent and the Grenadines
          </option>
          <option id="WS" value="685" data-country="WS">
          Samoa
          </option>
          <option id="SM" value="378" data-country="SM">
          San Marino
          </option>
          <option id="ST" value="239" data-country="ST">
          São Tomé and Príncipe
          </option>
          <option id="SA" value="966" data-country="SA">
          Saudi Arabia
          </option>
          <option id="SN" value="221" data-country="SN">
          Senegal
          </option>
          <option id="SC" value="248" data-country="SC">
          Seychelles
          </option>
          <option id="SL" value="232" data-country="SL">
          Sierra Leone
          </option>
          <option id="SG" value="65" data-country="SG">
          Singapore
          </option>
          <option id="SK" value="421" data-country="SK">
          Slovakia
          </option>
          <option id="SI" value="386" data-country="SI">
          Slovenia
          </option>
          <option id="SB" value="677" data-country="SB">
          Solomon Islands
          </option>
          <option id="SO" value="252" data-country="SO">
          Somalia
          </option>
          <option id="ZA" value="27" data-country="ZA">
          South Africa
          </option>
          <option id="GS" value="44" data-country="GS">
          South Georgia and the South Sandwich Islands
          </option>
          <option id="ES" value="34" data-country="ES">
          Spain
          </option>
          <option id="LK" value="94" data-country="LK">
          Sri Lanka
          </option>
          <option id="SD" value="249" data-country="SD">
          Sudan
          </option>
          <option id="SR" value="597" data-country="SR">
          Suriname
          </option>
          <option id="SJ" value="47" data-country="SJ">
          Svalbard
          </option>
          <option id="SZ" value="268" data-country="SZ">
          Swaziland
          </option>
          <option id="SE" value="46" data-country="SE">
          Sweden
          </option>
          <option id="CH" value="41" data-country="CH">
          Switzerland
          </option>
          <option id="SY" value="963" data-country="SY">
          Syria
          </option>
          <option id="TW" value="886" data-country="TW">
          Taiwan
          </option>
          <option id="TJ" value="992" data-country="TJ">
          Tajikistan
          </option>
          <option id="TZ" value="255" data-country="TZ">
          Tanzania
          </option>
          <option id="TH" value="66" data-country="TH">
          Thailand
          </option>
          <option id="TG" value="228" data-country="TG">
          Togo
            </option>
          <option id="TK" value="690" data-country="TK">
          Tokelau
          </option>
          <option id="TO" value="676" data-country="TO">
          Tonga
          </option>
          <option id="TT" value="1-868" data-country="TT">
          Trinidad and Tobago
          </option>
          <option id="TN" value="216" data-country="TN">
          Tunisia
          </option>
          <option id="TR" value="90" data-country="TR">
          Turkey
          </option>
          <option id="TM" value="993" data-country="TM">
          Turkmenistan
          </option>
          <option id="TC" value="649" data-country="TC">
          Turks and Caicos Islands
          </option>
          <option id="TV" value="688" data-country="TV">
          Tuvalu
          </option>
          <option id="UG" value="256" data-country="UG">
          Uganda
          </option>
          <option id="UA" value="380" data-country="UA">
          Ukraine
          </option>
          <option id="AE" value="971" data-country="AE">
          United Arab Emirates
          </option>
          <option id="GB" value="44" data-country="GB">
          United Kingdom
          </option>
          <option id="US" data-country="US">
          United States
          </option>
          <option id="UY" value="598" data-country="UY">
          Uruguay
          </option>
          <option id="UZ" value="998" data-country="UZ">
          Uzbekistan
          </option>
          <option id="UM" data-country="UM">
          United States Minor Outlying Islands
          </option>
          <option id="VU" value="678" data-country="VU">
          Vanuatu
          </option>
          <option id="VE" value="58" data-country="VE">
          Venezuela
          </option>
          <option id="VN" value="84" data-country="VN">
          Vietnam
          </option>
          <option id="VI" value="1340" data-country="VI">
          Virgin Islands
          </option>
          <option id="WF" value="681" data-country="WF">
          Wallis and Futuna
          </option>
          <option id="EH" value="212" data-country="EH">
          Western Sahara
          </option>
          <option id="YE" value="967" data-country="YE">
          Yemen
          </option>
          <option id="YU" data-country="YU">
          Yugoslavia
          </option>
          <option id="ZM" value="260" data-country="ZM">
          Zambia
          </option>
          <option id="ZW" value="263" data-country="ZW">
          Zimbabwe
          </option>
          <option id="PS" value="970" data-country="PS">
          Palestinian Territory, Occupied
          </option>
        </select>
        <label for="country" class="label_country">
          <span class="content_name">Country</span>
        </label>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="form-group inputWrapper phoneW clearfix">
        <input type="text" class="form-control input phone-prefix" placeholder="+40" readonly tabindex="-1">
        <input type="tel" id="phone" class="form-control input phone-number" name="phone" placeholder="Phone No" required autocomplete="off" aria-required="true" pattern="[0-9]{6,}">
        <label for="phone" class="label_phone">
          <span class="content_name">Phone No</span>
        </label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group message">
        <textarea name="message" id="message" class="form-control" placeholder="Message"></textarea>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group inputWrapper m-0 text-center">
        <button type="submit" class="cssecoBtn" id="submit"><span>Send</span></button>
      </div>
    </div>
  </div>
</form>