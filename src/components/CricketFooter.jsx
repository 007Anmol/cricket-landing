import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Text } = Typography;

export default function CricketFooter() {
  return (
    <Footer style={{ backgroundColor: '#001529', color: '#fff', padding: '40px 0' }}>
      <div className="max-w-7xl mx-auto px-8 py-8 text-white text-center">
        <Row gutter={[16, 16]} justify="center">
          {/* About Cricket Section */}
          <Col xs={24} sm={12} md={8}>
            <Title level={3} style={{ color: '#fff' }}>About CricketMania</Title>
            <Text style={{ color: '#ccc', lineHeight: '1.8' }}>
            CricketMania offers an immersive cricket experience with live scores, player stats, fantasy leagues, news, community forums, and exclusive merchandise, connecting cricket fans to their favorite sport like never before.
            </Text>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={8}>
            <Title level={3} style={{ color: '#fff' }}>Quick Links</Title>
            <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#ccc' }}>
              <li><a href="#home" style={{ color: '#ccc', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#teams" style={{ color: '#ccc', textDecoration: 'none' }}>Teams</a></li>
              <li><a href="#schedule" style={{ color: '#ccc', textDecoration: 'none' }}>Match Schedule</a></li>
              <li><a href="#contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact Us</a></li>
            </ul>
          </Col>

          {/* Social Media Section */}
          <Col xs={24} sm={12} md={8}>
            <Title level={3} style={{ color: '#fff' }}>Follow Us</Title>
            <div style={{ fontSize: '24px' }}>
              <a href="https://facebook.com" style={{ color: '#fff', marginRight: '15px' }}>
                <FacebookOutlined />
              </a>
              <a href="https://twitter.com" style={{ color: '#fff', marginRight: '15px' }}>
                <TwitterOutlined />
              </a>
              <a href="https://instagram.com" style={{ color: '#fff' }}>
                <InstagramOutlined />
              </a>
            </div>
          </Col>
        </Row>

        <div style={{ marginTop: '40px', textAlign: 'center', color: '#ccc' }}>
          © 2024 CricketMania. All Rights Reserved.
        </div>
      </div>
    </Footer>
  );
}
