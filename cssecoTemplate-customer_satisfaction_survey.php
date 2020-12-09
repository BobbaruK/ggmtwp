<?php
/**
  * Template Name: Customer Satisfaction Survey
  * @package cssecoST
  */

get_header(); ?>

<section id="section1" class="css">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Customer Satisfaction Survey</h1>
        <p>Dear customer,</p>
        <p>As part of our customer service approach we are always looking to exceed our performance and learn to make a better result as we go.</p>
        <h3>Let's Start:</h3>
        <?php require get_template_directory() . '/includes/front/templates/customer_satisfaction_survey.php'; ?>
        <p class="mt-5">Thank you for your feedback.</p>
        <p>We appreciate your honest opinion and will take your input into consideration while providing products and services in the future.</p>
        <p class="mt-5">Sincerely</p>
      </div>
    </div>
  </div>
</section>


<?php get_footer(); ?>