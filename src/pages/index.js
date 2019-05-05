import React from 'react'
import styles from './index.less';
import { Row, Col, Carousel, Modal } from 'antd'

const bannerImgConfig = [
  {
    key: 'xx01',
    src: 'http://106.12.99.96/微信图片_20190430213148.jpg',
  }, {
    key: 'xx02',
    src: 'http://106.12.99.96/微信图片_20190430213221.jpg',
  },  {
    key: 'xx03',
    src: 'http://106.12.99.96/微信图片_20190430213327.jpg',
  },  {
    key: 'xx04',
    src: 'http://106.12.99.96/微信图片_20190430213330.jpg',
  },  {
    key: 'xx05',
    src: 'http://106.12.99.96/微信图片_20190430213257.jpg',
  }
]

const topLeft = {
  xl: {span: 18},
  lg: {span: 18},
  md: {span: 18},
  sm: {span: 24},
  xs: {span: 24},
};

const topRight = {
  xl: {span: 6},
  lg: {span: 6},
  md: {span: 6},
  sm: {span: 24},
  xs: {span: 24},
};
export default  class  IndexI extends React.PureComponent{

  constructor(props) {
    super(props)
    this.state = {
      wxCodeModalVisible: false
    }
  }

  handleWxCodeVisible = (e) => {
    e && e.stopPropagation();
    this.setState({
      wxCodeModalVisible: true
    })
  }

  handleWxCodeModal = (e) => {
    e && e.stopPropagation();
    this.setState({
      wxCodeModalVisible: false
    })
  }

  render() {
    const { wxCodeModalVisible } = this.state;

    return(
      <Row className={styles.wrapper}>
        <Modal
          title={'加好友，微信扫一扫'}
          visible={wxCodeModalVisible}
          footer={null}
          onCancel={this.handleWxCodeModal}>
          微信二维码
        </Modal>
        <Row className={styles.top}>
          <Col { ...topLeft } className={styles.leftArea}>
            <Row className={styles.header}>
              <h2>承接淄博各个地区[大小工程防水 、防水补漏 、防水‌‌堵漏]、新旧楼房厂房、家庭防水 技术领先 价格优惠</h2>
              <span onClick={this.handleWxCodeVisible} className={styles.wxCode}>微信二维码</span>
              <span className={styles.wxNum}>微信号：abc13031782788</span>
            </Row>
            <Row className={styles.detailContent}>
              <Col className={styles.banners} {...{
                xl: {span: 16},
                lg: {span: 16},
                md: {span: 16},
                sm: {span: 24},
                xs: {span: 24},
              }}>
                <Carousel
                  autoplay={true}
                  infinite
                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  afterChange={index => console.log('slide to', index)}
                >
                  {bannerImgConfig.map(val => (
                    <img
                      key={val.key}
                      src={val.src}
                      alt=""
                      style={{ width: '100%', verticalAlign: 'top',}}
                      onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                      }}
                    />
                  ))}
                </Carousel>
              </Col>
              <Col className={styles.detail} {...{
                xl: {span: 8},
                lg: {span: 8},
                md: {span: 8},
                sm: {span: 24},
                xs: {span: 24},
              }}>
                <p className={styles.detailRow}>
                  <span className={styles.label}>服务内容：</span>
                  <span className={styles.txt}>防水补漏</span>
                </p>
                <p className={styles.detailRow}>
                  <span className={styles.label}>服务范围：</span>
                  <span className={styles.txt}>大小工程防水 、防水补漏 、防水‌‌堵漏、新旧楼房厂房、家庭防水</span>
                </p>
                <p className={styles.detailRow}>
                  <span className={styles.label}>所在地：</span>
                  <span className={styles.txt}>张店区城中小区</span>
                </p>
                <p className={styles.detailRow}>
                  <span className={styles.label}>联系人：</span>
                  <span className={styles.txt}>韩英真</span>
                </p>
                <p className={styles.detailRow}>
                  <span className={styles.label}>联系电话：</span>
                  <span style={{color: 'red'}} className={styles.txt}>13031782788</span>
                </p>
              </Col>
            </Row>
          </Col>
          <Col { ...topRight } className={styles.rightArea}>
            <Row style={{textAlign: 'center'}}>
              <img className={styles.avatar} src="http://106.12.99.96/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190430213221.jpg" alt=""/>
            </Row>
            <h3>公司名称</h3>
            <Row style={{textAlign: 'center'}}>
              <span className={styles.regTime}>注册时间：2012年12月02日</span>
            </Row>
            <Row>
              <Row className={styles.subTitle}></Row>
              <ul className={styles.links}>
                <li>
                  <a href="#">装修</a>
                </li>
                <li>
                  <a href="#">防水</a>
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
        <Row className={styles.content}>
          <h2 className={styles.title}>服务简介:</h2>
          <p className={styles.descTxt}>
            承接淄博各个地区[大小工程防水 、防水补漏 、防水‌‌堵漏]、新旧楼房厂房、家庭防水。
            针对机关、单位、学校、开发商、小区物业、企业公司、建筑公司、居民住户、装修装饰公司等开展业务。
            我们秉承质量**服务**信誉**的服务宗旨和优惠的价格！ 以专业的实力、竭诚为社会各界新老客户提供优质服务。
          </p>
          <p>
            <p><b>服务项目：</b></p>
            <p>1、新旧屋面防水，大型工矿厂房屋面防水</p>
            <p>2、地下室，地下车库，地下通道，混凝土裂缝，沉降缝带水堵漏</p>
            <p>3、厨房间，卫生间，淋浴间，桑拿浴房防水防腐</p>
            <p>4、人工湖，游泳池，喷泉假山防水堵漏工程</p>
            <p>5、各种防水材料对墙角、屋面及地下室外墙的防水处理</p>
            <p>6、厂房，楼面防水、渗水维修补漏，学校装修、二手房装修及翻新等</p>
            <p>7、天沟、阳台，隧道、地下室防水补漏.</p>
            <p>8、厨房卫生间防水，楼顶防水补漏工程。</p>
          </p>
          <p></p>
          <p></p>
          <p><b>服务图片：</b></p>
          <Row>
            <ul className={styles.imgItems}>
              <li className={styles.imgItem}>
                <img src="http://106.12.99.96/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190430213221.jpg" alt=""/>
              </li>
              <li className={styles.imgItem}>
                <img src="http://106.12.99.96/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190430213221.jpg" alt=""/>
              </li>  <li className={styles.imgItem}>
              <img src="http://106.12.99.96/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190430213221.jpg" alt=""/>
            </li>
            </ul>
          </Row>
        </Row>
      </Row>
    )
  }
}
