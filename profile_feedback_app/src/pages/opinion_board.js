import { useEffect, useState } from "react"
import style from "@/styles/Opinion.module.css"

export default function Opinion(){

    const [opinions, setOpinions] = useState([])

    const fetchOpinions = async () => {
        try {
            const res = await fetch("/api/getOpinion")
            const data = await res.json()

            setOpinions(data.data)

        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchOpinions()
    }, [])

    return(
        <div className={style.container}>
            <h2>กระดานความคิดเห็น</h2>

            {opinions.length === 0 ? (
                <p>ยังไม่มีความคิดเห็น</p>
            ) : (
                opinions.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.email}</p>
                        <p>⭐ {item.rating}</p>
                        <p>{item.opinion}</p>
                        <hr />
                    </div>
                ))
            )}
        </div>
    )
}