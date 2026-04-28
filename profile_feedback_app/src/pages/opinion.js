import Head from "next/head"
import Form from "../components/Form"

export default function Opinion(){
    return(
        <div role="form" label="form">

            <div role="group" label="name">
                <h2 id="name-label">ชื่อ</h2>
                <input 
                type="text" 
                label="กรอกชื่อ-นามสกุล" 
                name="name" 
                placeholder="กรอกชื่อ-นามสกุล"
                />
            </div>

            <div role="group" label="email">
                <h2 id="email">ที่อยู่อีเมล</h2>
                <input 
                type="email" 
                label="กรอกที่อยู่อีเมล" 
                name="email" 
                placeholder="กรอกที่อยู่อีเมล"
                />
            </div>

            <div role="group" label="date">
                <h2 id="date-label">วันที่สร้าง</h2>
                <input 
                type="date" 
                label="วันที่สร้าง" 
                name="create_date"
                />
            </div>

            <div role="group" label="rating">
                <h2 id="rating-label">ให้คะแนน</h2>
                <select label="เลือกคะแนน" name="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
            </div>

            <div role="textarea" label="rating">
                <h2 id="opinion-label">ความคิดเห็น</h2>
                <textarea label="opinion" placeholder="กรอกความคิดเห็นเพิ่มเติม"></textarea>
            </div>

            <button className={style.submit} type="submit">ส่งความคิดเห็น</button>
        </div>
    )

}