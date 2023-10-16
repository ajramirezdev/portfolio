class Email {
  constructor() {
    this.BASE_URL = "https://portfolio-be-f2w2.onrender.com";
  }

  async sendEmail(email) {
    try {
      await fetch(`${this.BASE_URL}/email`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
    } catch (error) {
      console.log(error);
    }
  }
}

const model = new Email();

export default model;
