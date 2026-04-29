export class Opinion {
  constructor({ name, email, create_date, rating, opinion }) {
    this.name = name;
    this.email = email;
    this.create_date = create_date;
    this.rating = rating;
    this.opinion = opinion;

    
    if (!name) {
      throw new Error("กรุณากรอกชื่อ");
    }
    if (!email) {
      throw new Error("กรุณากรอกอีเมล");
    }

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailFormat.test(email)) {
      throw new Error("กรุณากรอกอีเมลที่ถูกต้อง");
    }

  }
}