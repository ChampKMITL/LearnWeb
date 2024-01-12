import React from 'react';
import Counter from './Counter';

class Block1 extends React.Component {
    render() {
        return (
            <div className='block__3'>
                <div className='content'>
                    <h1>อาหารคาว</h1>
                    <h3>ผัดไทย</h3>
                    <p>ผัดไทยเป็นอาหารที่ได้รับอิทธิพลจากอาหารจีน เดิมเรียกอาหารชนิดนี้ว่า "ก๋วยเตี๋ยวผัด" และได้รับการเปลี่ยนแปลงด้านรสชาติใหม่ตามอย่างอาหารไทยมากขึ้นในเวลาต่อมา
                        ผัดไทยได้กลายเป็นที่รู้จักของคนต่างชาติในสมัยจอมพล ป. พิบูลสงคราม นายกรัฐมนตรีในขณะนั้นซึ่งเป็นช่วงเดียวกับสงครามโลกครั้งที่ 2 ท่านได้รณรงค์ให้ประชาชนหันมานิยมรับประทานก๋วยเตี๋ยว เพื่อลดการบริโภคข้าวภายในประเทศ เนื่องจากในช่วงนั้นสภาวะเศรษฐกิจของประเทศตกต่ำ ข้าวแพง โดยท่านได้กล่าวเอาไว้ว่า
                        "อยากให้พี่น้องกินก๋วยเตี๋ยวให้ทั่วกัน เพราะก๋วยเตี๋ยวมีประโยชน์ต่อร่างกาย มีรสเปรี้ยว เค็ม หวานพร้อม ทำเองได้ในประเทศไทย หาได้สะดวกและอร่อยด้วย หากพี่น้องชาวไทยกินก๋วยเตี๋ยวคนละหนึ่งชามทุกวัน วันหนึ่งจะมีคนกินก๋วยเตี๋ยวสิบแปดล้านชาม </p>
                    <div className='counter'>
                        <Counter />
                    </div>
                </div>
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/250px-Phat_Thai_kung_Chang_Khien_street_stall.jpg" / >
                
            </div>
            );
        }
        }

export default Block1;