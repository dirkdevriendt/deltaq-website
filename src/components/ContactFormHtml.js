import React from 'react'

export default ({...props}) => {
  return (
    <form action="https://forms.zohopublic.eu/deltaq/form/DeltaQioContactForm/formperma/mOukU6-fxce3aG01pGZAATW0g4z7FyxmATJJ5XVGUbw/htmlRecords/submit" className={props.classname} method='POST' acceptCharset='UTF-8' encType='multipart/form-data'>
      <input type="hidden" name="zf_referrer_name" value=""/>
      <input type="hidden" name="zf_redirect_url" value=""/>
      <input type="hidden" name="zc_gad" value=""/>
      <div className="gegevens-half first">
        <div className="form-group">
          <label htmlFor="Name_First">First name*</label>
          <input className="form-control" type="text" maxLength="255" name="Name_First" id="Name_First" fieldType='7' required/>
          <span className="help-block"></span>
        </div>
      </div>
      <div className="gegevens-half">
      <div className="form-group">
        <label htmlFor="Name_Last">Family name*</label>
          <input className="form-control" type="text" maxLength="255" name="Name_Last" id="Name_Last" fieldType='7' required/>
          <span className="help-block"></span>
        </div>
      </div>
      <div className="gegevens">
        <div className="form-group">
          <label htmlFor="Email">Email*</label>
          <input className="form-control" type="email" maxLength="255" name="Email" id="Email" fieldType='9' required/>
        </div>
      </div>
      <div className="gegevens-half first">
        <div className="form-group ">
          <label htmlFor="international_PhoneNumber_countrycode">Phone number</label>
          <input className="form-control" type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" phoneFormat="1" isCountryCodeEnabled='false' maxLength="20" fieldType='11' id="international_PhoneNumber_countrycode" />
        </div>
      </div>
      <div className="gegevens-half">
        <div className="form-group ">
          <label htmlFor="SingleLine">Company*</label>
          <input className="form-control" type="text" name="SingleLine" id="SingleLine"  fieldType='1' maxLength="255" required/>
        </div>
      </div>
      <div className="gegevens">
        <div className="form-group">
          <label htmlFor="Dropdown">Who you are</label>
          <select name="Dropdown" id="Dropdown" defaultValue="-Select-">
            <option value="-Select-">-Select-</option>
            <option value="Assets&#x20;&amp;&#x20;property&#x20;manager">Assets &amp; property manager</option>
            <option value="Project&#x20;development&#x20;&amp;&#x20;construction">Project development &amp; construction</option>
            <option value="Facility&#x20;management&#x20;&amp;&#x20;maintenance">Facility management &amp; maintenance</option>
            <option value="Building&#x20;occupant">Building occupant</option>
            <option value="Partner">Partner</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div className="message">
        <div className="form-group">
          <label htmlFor="MultiLine">Your message*</label>
          <textarea className="form-control" name="MultiLine" id="MultiLine" maxLength="65535" cols="30" rows="3" required></textarea>
        </div>
      </div>
      <div className="checkboxes">
        <div className="form-group">
          <input type="checkbox" id="DecisionBox" name="DecisionBox" required/>
          <label htmlFor="DecisionBox">I agree to the privacy policy and general terms</label>
        </div>
      </div>
      <div className='submitbutton'>
        <button className="sendbtn" type='submit'>Send</button>
      </div>
    </form>
  )
}