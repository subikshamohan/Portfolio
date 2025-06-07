import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  introContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  introTextContainer: {
    margin: 10,
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
    flex: 1, // Ensures text takes up available space
  },
  introImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  introImage: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
};

function About({ header }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.about, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data ? (
            <Fade>
              <Row className="align-items-center" style={styles.introContainer}>
                {/* Text Column (Left) */}
                <Col xs={12} md={8} style={styles.introTextContainer}>
                  <ReactMarkdown>{data.about}</ReactMarkdown>
                </Col>

                {/* Image Column (Right) */}
                <Col xs={12} md={4} style={styles.introImageContainer}>
                  <img src={data?.imageSource} alt="profile" style={styles.introImage} />
                </Col>
              </Row>
            </Fade>
          ) : (
            <FallbackSpinner />
          )}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
