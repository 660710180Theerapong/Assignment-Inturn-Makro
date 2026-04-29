import Head from "next/head"
import Image from "next/image"
import style from "@/styles/Home.module.css"

export default function Profile(){
    return(  
      <div className={style.container}>
            <Head>
                <title>My profile</title>
            </Head>
            
            
            <div className={style.container2}>
                <h1>My Profile</h1>

                <Image src="/mypic.jpg" width={300} height={300} alt="my_picture"/>
                
                <div className={style.card}>
                    <h2>ธีรพงศ์ พูนขวัญ</h2> 
                </div>
                
                
                <div className={style.card}>
                    <h2>ประวัติ</h2> <br/>
                    <p>นักศึกษาชั้นปีที่ 4 สาขาเทคโนโลยีสารสนเทศ มีความสนใจด้าน Software Developer<br/>
                    ต้องการหาประสบการณ์การทำงานจริงผ่านโครงการสหกิจศึกษา เพื่อพัฒนาทักษะและนำความรู้ที่่ได้ไปประยุกต์ใช้
                    </p> <br/>
                </div>
                
                <div className={style.card}>
                    <h2>ประวัติการศึกษา</h2> 
                    <p>วิทยาศาสตรบัณฑิต สาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยศิลปากร</p> <br/>
                    <p>ปีการศึกษา 2565 - ปัจจุบัน | GPA 3.52</p> <br/>
                </div>
                
                
                <div className={style.card}>
                    <h2>ทักษะการพัฒนาซอฟต์แวร์</h2> 
                    <p> ◾ React <br/>
                        ◾ Golang<br/>
                        ◾ NextJS<br/>
                        ◾ GitHub<br/>
                    </p> 
                </div>
                
                <div className={style.card}>
                    <h2>ลิงก์ที่เกี่ยวข้อง</h2>
                    <a href="https://github.com/660710180Theerapong">GitHub</a><br/>
                    <a href="https://linkedin.com/in/theerapong-poonkwan-a569ba3a0/">LinkIn</a>
                </div>

            </div>
      </div>
    )
}