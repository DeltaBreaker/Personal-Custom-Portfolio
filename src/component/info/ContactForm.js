export default function ContactForm() {
  return (
    <form>
      <fieldset>
        <legend>Contact Me</legend>
        <p class="contact-input">
          <label for="text">Name</label>
          <input id="text" required type="text" />
        </p>
        <p class="contact-input">
          <label for="email">Email</label>
          <input
            id="text"
            required
            type="email"
            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
          />
        </p>
        <p class="contact-input">
          <label for="textarea">Message</label>
          <textarea id="textarea" rows="8"></textarea>
        </p>
        <button class="button" type="submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
}
