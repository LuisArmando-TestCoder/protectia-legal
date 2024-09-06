<script lang="ts">
    import Button from '../Schedule/Schedule.svelte';
    import Text from '../Text/Text.svelte';
    import Section from '../Section/Section.svelte';
  
    const leftSectionContent = "QUIÉNES SOMOS";
    const rightSectionContent = "NUESTROS SERVICIOS";
    const backgroundImageLeft = "./pexels-august-de-richelieu-4427610.jpg"; // Replace with actual image path
    const backgroundImageRight = "./pexels-pixabay-48148-2.png"; // Replace with actual image path
  
    function handleAppointmentClick() {
      // Logic to handle appointment click
    }
  </script>
  
  <div class="home">

    <div class="content">
      <Section backgroundImage={backgroundImageLeft}>
        <div class="title-align-text title-align-text-left">
          <a href="/nosotros">
            <Text text={leftSectionContent} type="title" />
          </a>
        </div>
      </Section>
      <Section backgroundImage={backgroundImageRight}>
        <div class="title-align-text title-align-text-right">
          <a href="servicios">
            <Text text={rightSectionContent} type="title" />
          </a>
        </div>
      </Section>
    </div>
  </div>
  
  <style lang="scss">
    .home {
      background-color: #000;
      overflow: hidden;
    }
  
    .content {
      height: 100vh;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(512px, 1fr));
    }

    .title-align-text {
      cursor: pointer;
      user-select: none;
      width: 5px;
      display: table;
      white-space: pre-wrap; /* css-3 */
      white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
      white-space: -pre-wrap; /* Opera 4-6 */
      white-space: -o-pre-wrap; /* Opera 7 */
      word-wrap: break-word; /* Internet Explorer 5.5+ */

      &-left {
        text-align: left;
      }

      &-right {
        text-align: right;
      }

      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
  </style>
  