import { useState } from "react"
import style from "@/styles/Opinion.module.css"

export default function Opinion(){

    const [form, setForm] = useState({
        name: "",
        email: "",
        create_date: "",
        rating: "1",
        opinion: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch("/api/opinion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })

            const data = await res.json()
            console.log("SUCCESS:", data)

        } catch (err) {
            console.error("ERROR:", err)
        }
    }

    return(
        <form className={style.container} onSubmit={handleSubmit}>

            <div>
                <h2>ชื่อ</h2>
                <input 
                    type="text"
                    name="name"
                    placeholder="กรอกชื่อ-นามสกุล"
                    onChange={handleChange}
                />
            </div>

            <div>
                <h2>ที่อยู่อีเมล</h2>
                <input 
                    type="email"
                    name="email"
                    placeholder="กรอกที่อยู่อีเมล"
                    onChange={handleChange}
                />
            </div>

            <div>
                <h2>วันที่สร้าง</h2>
                <input 
                    type="date"
                    name="create_date"
                    onChange={handleChange}
                />
            </div>

            <div>
                <h2>ให้คะแนน</h2>
                <select name="rating" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div>
                <h2>ความคิดเห็น</h2>
                <textarea 
                    name="opinion"
                    placeholder="กรอกความคิดเห็นเพิ่มเติม"
                    onChange={handleChange}
                />
            </div>

            <button className={style.submit} type="submit">
                ส่งความคิดเห็น
            </button>

        </form>
    )
}