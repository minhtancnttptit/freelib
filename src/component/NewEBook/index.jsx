import React from 'react'
import { Carousel } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import EBook from '../EBook';
class NewEBook extends React.Component {
    state = {

    }

    carousel = undefined;

    next = () => {
      this.carousel.next();
    }

    prev = () => {
      this.carousel.prev();
    }
    
    render() {
        const ebookMoi = [
            {
                name: 'Ebook1',
                image: 'http://luutru.vietlib.vn/upload/4b2553ebc1e2ecd65c820887d0e998a9/[vietlib.vn]-lippincott-illustrated-reviews-biochemistry-7th-edition-2017.jpg',
                countClick: 9,
                status: true
            },
            {
                name: 'Ebook2',
                image: 'http://luutru.vietlib.vn/upload/c488959a2511411b94bb1f0bf05d651f/[vietlib.vn]-hitchhikers-guide-to-the-galaxy-the---douglas-adams--eoin-colfer.jpg',
                countClick: 1,
                status: true
            },
            {
                name: 'Ebook3',
                image: 'http://luutru.vietlib.vn/upload/fad59b3e1f2211845d0ac5933f28fb1e/[vietlib.vn]-watership-down---richard-adams.jpg',
                countClick: 3,
                status: true
            },
            {
                name: 'Ebook4',
                image: 'http://luutru.vietlib.vn/upload/af3f28684eef95f740bdc3f1114e85da/[vietlib.vn]-little-women---louisa-may-alcott.jpg',
                countClick: 3,
                status: true
            },
            {
                name: 'Ebook5',
                image: 'http://luutru.vietlib.vn/upload/4b2553ebc1e2ecd65c820887d0e998a9/[vietlib.vn]-lippincott-illustrated-reviews-biochemistry-7th-edition-2017.jpg',
                countClick: 91,
                status: true
            },
            {
                name: 'Ebook6',
                image: 'http://luutru.vietlib.vn/upload/c488959a2511411b94bb1f0bf05d651f/[vietlib.vn]-hitchhikers-guide-to-the-galaxy-the---douglas-adams--eoin-colfer.jpg',
                countClick: 1,
                status: true
            },
            {
                name: 'Ebook7',
                image: 'http://luutru.vietlib.vn/upload/fad59b3e1f2211845d0ac5933f28fb1e/[vietlib.vn]-watership-down---richard-adams.jpg',
                countClick: 3,
                status: true
            },
            {
                name: 'Ebook8',
                image: 'http://luutru.vietlib.vn/upload/af3f28684eef95f740bdc3f1114e85da/[vietlib.vn]-little-women---louisa-may-alcott.jpg',
                countClick: 3,
                status: true
            },
        ]
        let element = ebookMoi.map((EbookMoi) => {
            let result = '';
            if (EbookMoi.status) {
                return <EBook textEbook={EbookMoi.name} srcImageEbook={EbookMoi.image} countClick={EbookMoi.countClick} />
            }
            return result;
        });
        return (
            <div>
                <h1>Ebook mới</h1>
                <LeftCircleOutlined onClick={this.prev} />
                <Carousel ref={(node) => (this.carousel = node)} >
                    {/* {ebookMoi.map((ebook) => (
                      <EBook key={ebook.name} textEbook={ebook.name} srcImageEbook={ebook.image} countClick={ebook.countClick} />
                    ))} */}
                    {
                      <div>
                        <>
                          element[0]
                          element[1]
                        </>
                      </div>
                      <div>
                        <>
                          element[2],
                          element[3]
                        ]}
                      </div>
                    }
                </Carousel>
                <RightCircleOutlined onClick={this.next} />
            </div>
        );
    }
}
export default (NewEBook);