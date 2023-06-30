<!-- <iframe src="https://www.google.com/maps/d/embed?mid=1GFHsSz5hTNROmJAs2WeZg-im7iA&ll=35.155146296661194%2C33.324519856762684&z=13" width="640" height="480"></iframe> -->
<script>
    import { page } from "$app/stores";
    let name = "";
    let email = "";
    let topic = "";
    let comments = "";
    console.log($page);
    import { selected } from "../../csvdata";
    const handleSubmit = () => {
      if (!name || !email) {
        alert('Συμπληρώστε όλα τα πεδία. || Please fill in the required fields.');
        return;
      }
      if (!validateEmail(email)) {
        alert('Παρακαλώ δώστε σωστή ηλεκτρονική διεύθυνση. || Please enter a valid email address.');
        return;
      }
  
      console.log({ name, email, topic, comments, $selected });
      alert('Το μήνυμα εστάλη επιτυχώς! Ελέγξτε τα e-mail σας για απάντηση.        Form submitted successfully! Check your e-mail shortly.');
    }
  
    const validateEmail = (email) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  </script>
  
  <style>
    .field {
      margin-bottom: 20px;
    }
    .label {
      display: block;
      margin-bottom: 5px;
    }
  </style>
  
  <form class="" on:submit|preventDefault={handleSubmit}>
    <div class="field">
      <label for="name" class="label">ΟΝΟΜΑ / NAME (REQUIRED)</label>
      <input type="text" id="name" bind:value={name} required>
    </div>
    
    <div class="field">
      <label for="email" class="label">EMAIL (REQUIRED)</label>
      <input type="email" id="email" bind:value={email} required>
    </div>
  
    <div class="field">
      <label for="topic" class="label">ΘΕΜΑ / TOPIC</label>
      <input type="text" id="topic" bind:value={topic} required>
    </div>
  
    <div class="field">
      <label for="comments" class="label">ΣΧΟΛΙΑ / COMMENTS</label>
      <textarea id="comments" bind:value={comments} required></textarea>
    </div>
    <div class="field">
        <label class="label text-xl py-3">Επιλεγμένα Προϊόντα / Selected Products:</label>
        <div class="flex flex-wrap overflow-hidden">
          {#each $selected as item}
            <li>{item.category}: <img class="md:w-auto m-3 mx-3 rounded-2xl hover:scale-110 "  src={item.image.replace("cdn","media").replace("com","net").replace("jpg","jpg?width=240&height=160").replace("JPG","JPG?width=240&height=160")} /></li>
            
          {/each}
        
    </div>
      </div>
    <button class="btn variant-filled" type="submit">Submit</button>
  </form>
  
