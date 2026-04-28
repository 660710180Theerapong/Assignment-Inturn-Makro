import Head from "next/head"
import Image from "next/image"

export default function Profile(){
    return(  
      <>
            <Head>
                <title>My profile</title>
            </Head>
            
            <h1>My Profile</h1>
            <div>
                <Image src="/mypic.png" width={300} height={300} alt="my_picture"/>

                <p>ธีรพงศ์ พูนขวัญ</p> <br/>
                
                <h2>ประวัติ</h2> <br/>
                <p>นักศึกษาชั้นปีที่ 4 สาขาเทคโนโลยีสารสนเทศ มีความสนใจด้าน Software Developer
                ต้องการหาประสบการณ์การทำงานจริงผ่านโครงการสหกิจศึกษา เพื่อพัฒนาทักษะและนำความรู้ที่่ได้ไปประยุกต์ใช้
                </p> <br/>

                <h2>ประวัติการศึกษา</h2> 
                <p>วิทยาศาสตรบัณฑิต สาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยศิลปากร</p> <br/>
                <p>ปีการศึกษา 2565 - ปัจจุบัน | GPA 3.52</p> <br/>

                <h2>ทักษะการพัฒนาซอฟต์แวร์</h2> <br/>
                <p> ◾ React <br/>
                    ◾ Golang<br/>
                    ◾ NextJS<br/>
                    ◾ GitHub<br/>
                </p> 

                <h2>ลิงก์ที่เกี่ยวข้อง</h2>
                <a href="https://github.com/660710180Theerapong">GitHub</a><br/>
                <a href="https://linkedin.com/in/theerapong-poonkwan-a569ba3a0/">LinkIn</a>
            </div>
      </>
    )
}