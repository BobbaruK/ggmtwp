<?php
/**
 * @package cssecoST
 *
 * Customer Satisfaction Survey
 */
?>



<form action="" class="forms" id="customer_survey">
  <div class="row">
    <div class="col-12">
      <div class="form-group">
        <input type="text" id="firstLastName" class="form-control input firstLastName" name="firstLastName" placeholder="First and Last Name" required autocomplete="off" aria-required="true">
        <label for="firstLastName" class="label_firstLastName">
          <span class="content_name">First and Last Name</span>
        </label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <input type="text" id="organioationCompany" class="form-control input organioationCompany" name="organioationCompany" placeholder="Organization/Company" required autocomplete="off" aria-required="true">
        <label for="organioationCompany" class="label_organizationCompany">
          <span class="content_name">Organization/Company</span>
        </label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <input type="text" id="positionInCompany" class="form-control input positionInCompany" name="positionInCompany" placeholder="Position in company" required autocomplete="off" aria-required="true">
        <label for="positionInCompany" class="label_positionInCompany">
          <span class="content_name">Position in company</span>
        </label>
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <label for="chooseProduct" class="label_chooseProduct">
          <span class="content_name">Choose the product(s) you purchased</span>
        </label>
        <select id="chooseProduct" class="form-control select chooseProduct" name="chooseProduct" placeholder="Choose the product(s) you purchased" required autocomplete="off" aria-required="true">
          <option>Select</option>
          <option>Option1</option>
          <option>Option2</option>
          <option>Option3</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-12">
      <h3>A. How likely are you to recommend GGMT to someone else?</h3>
    </div>
    <div class="col-12">
      <div class="form-group">
        <input type="radio" id="qA-1" class="form-control radio qA-1" name="qA" placeholder="very likely" required autocomplete="off" aria-required="true">
        <label for="qA-1" class="label_qA-1">
          <span class="content_name">very likely</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qA-2" class="form-control radio qA-2" name="qA" placeholder="likely" required autocomplete="off" aria-required="true">
        <label for="qA-2" class="label_qA-2">
          <span class="content_name">likely</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qA-3" class="form-control radio qA-3" name="qA" placeholder="unlikely" required autocomplete="off" aria-required="true">
        <label for="qA-3" class="label_qA-3">
          <span class="content_name">1 unlikely</span>
        </label>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-12">
      <h3>B. General satisfaction from your purchase?</h3>
    </div>
    <div class="col-12">
      <div class="form-group">
        <input type="radio" id="qB-1" class="form-control radio qB-1" name="qB" placeholder="Excellent" required autocomplete="off" aria-required="true">
        <label for="qB-1" class="label_qB-1">
          <span class="content_name">Excellent</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qB-2" class="form-control radio qB-2" name="qB" placeholder="Very Good" required autocomplete="off" aria-required="true">
        <label for="qB-2" class="label_qB-2">
          <span class="content_name">Very Good</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qB-3" class="form-control radio qB-3" name="qB" placeholder="Good" required autocomplete="off" aria-required="true">
        <label for="qB-3" class="label_qB-3">
          <span class="content_name">Good</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qB-4" class="form-control radio qB-4" name="qB" placeholder="Fair" required autocomplete="off" aria-required="true">
        <label for="qB-4" class="label_qB-4">
          <span class="content_name">Fair</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qB-5" class="form-control radio qB-5" name="qB" placeholder="Poor" required autocomplete="off" aria-required="true">
        <label for="qB-5" class="label_qB-5">
          <span class="content_name">Poor</span>
        </label>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-12">
      <h3>C. How would you rate the quality of the product?</h3>
    </div>
    <div class="col-12">
      <div class="form-group">
        <input type="radio" id="qC-1" class="form-control radio qC-1" name="qC" placeholder="Excellent" required autocomplete="off" aria-required="true">
        <label for="qC-1" class="label_qC-1">
          <span class="content_name">Excellent</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qC-2" class="form-control radio qC-2" name="qC" placeholder="Very Good" required autocomplete="off" aria-required="true">
        <label for="qC-2" class="label_qC-2">
          <span class="content_name">Very Good</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qC-3" class="form-control radio qC-3" name="qC" placeholder="Good" required autocomplete="off" aria-required="true">
        <label for="qC-3" class="label_qC-3">
          <span class="content_name">Good</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qC-4" class="form-control radio qC-4" name="qC" placeholder="Fair" required autocomplete="off" aria-required="true">
        <label for="qC-4" class="label_qC-4">
          <span class="content_name">Fair</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qC-5" class="form-control radio qC-5" name="qC" placeholder="Poor" required autocomplete="off" aria-required="true">
        <label for="qC-5" class="label_qC-5">
          <span class="content_name">Poor</span>
        </label>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-12">
      <h3>D. Did the product you receive match the description/specification of GGMT</h3>
    </div>
    <div class="col-12">
      <div class="form-group">
        <input type="radio" id="qD-1" class="form-control radio qD-1" name="qD" placeholder="Excellent" required autocomplete="off" aria-required="true">
        <label for="qD-1" class="label_qD-1">
          <span class="content_name">Yes</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qD-2" class="form-control radio qD-2" name="qD" placeholder="Very Good" required autocomplete="off" aria-required="true">
        <label for="qD-2" class="label_qD-2">
          <span class="content_name">No</span>
        </label>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-12">
      <h3>E. How would you rate the packaging of the product you received?</h3>
    </div>
    <div class="col-12">
      <div class="form-group">
        <input type="radio" id="qE-1" class="form-control radio qE-1" name="qC" placeholder="Excellent" required autocomplete="off" aria-required="true">
        <label for="qE-1" class="label_qE-1">
          <span class="content_name">Excellent</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qE-2" class="form-control radio qE-2" name="qC" placeholder="Very Good" required autocomplete="off" aria-required="true">
        <label for="qE-2" class="label_qE-2">
          <span class="content_name">Very Good</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qE-3" class="form-control radio qE-3" name="qC" placeholder="Good" required autocomplete="off" aria-required="true">
        <label for="qE-3" class="label_qE-3">
          <span class="content_name">Good</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qE-4" class="form-control radio qE-4" name="qC" placeholder="Fair" required autocomplete="off" aria-required="true">
        <label for="qE-4" class="label_qE-4">
          <span class="content_name">Fair</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qE-5" class="form-control radio qE-5" name="qC" placeholder="Poor" required autocomplete="off" aria-required="true">
        <label for="qE-5" class="label_qE-5">
          <span class="content_name">Poor</span>
        </label>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-12">
      <h3>F. How would you rate GGMT's customer service?</h3>
    </div>
    <div class="col-12">
      <div class="form-group">
        <input type="radio" id="qF-1" class="form-control radio qF-1" name="qC" placeholder="Excellent" required autocomplete="off" aria-required="true">
        <label for="qF-1" class="label_qF-1">
          <span class="content_name">Excellent</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qF-2" class="form-control radio qF-2" name="qC" placeholder="Very Good" required autocomplete="off" aria-required="true">
        <label for="qF-2" class="label_qF-2">
          <span class="content_name">Very Good</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qF-3" class="form-control radio qF-3" name="qC" placeholder="Good" required autocomplete="off" aria-required="true">
        <label for="qF-3" class="label_qF-3">
          <span class="content_name">Good</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qF-4" class="form-control radio qF-4" name="qC" placeholder="Fair" required autocomplete="off" aria-required="true">
        <label for="qF-4" class="label_qF-4">
          <span class="content_name">Fair</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qF-5" class="form-control radio qF-5" name="qC" placeholder="Poor" required autocomplete="off" aria-required="true">
        <label for="qF-5" class="label_qF-5">
          <span class="content_name">Poor</span>
        </label>
      </div>


      <div class="row mt-5">
        <div class="form-group">
          <label for="message" class="d-block">Please write in your own words on your experience with GGMT:</label>
          <textarea class="form-control" id="message" rows="3"></textarea>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-12">
      <h3>Do you agree to our using your feedback on our site as a Testimonial?</h3>
    </div>
    <div class="col-12">
      <div class="form-group">
        <input type="radio" id="qG-1" class="form-control radio qG-1" name="qG" placeholder="Excellent" required autocomplete="off" aria-required="true">
        <label for="qG-1" class="label_qG-1">
          <span class="content_name">Yes</span>
        </label>
      </div>
      <div class="form-group">
        <input type="radio" id="qG-2" class="form-control radio qG-2" name="qG" placeholder="Very Good" required autocomplete="off" aria-required="true">
        <label for="qG-2" class="label_qG-2">
          <span class="content_name">No</span>
        </label>
      </div>
    </div>
  </div>
</form>