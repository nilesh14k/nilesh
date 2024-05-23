import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaPaperclip, FaTimes } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
    const [showCc, setShowCc] = useState(false);
    const [showBcc, setShowBcc] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const [currentDay, setCurrentDay] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [formData, setFormData] = useState({
        from: '',
        cc: '',
        bcc: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = { hour12: false };

            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', ...options });
            const day = now.toLocaleDateString([], { weekday: 'long' });
            const date = now.toLocaleDateString([], { day: '2-digit', month: 'long', year: 'numeric' });

            setCurrentTime(time);
            setCurrentDay(day);
            setCurrentDate(date);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 60000); // update every minute

        return () => clearInterval(intervalId);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const generateMailtoLink = () => {
        let mailto = `mailto:nileshkumar.nkmr@gmail.com`;
        mailto += `?subject=${encodeURIComponent(formData.subject)}`;
        mailto += `&body=${encodeURIComponent(formData.message)}`;
        if (formData.cc) mailto += `&cc=${encodeURIComponent(formData.cc)}`;
        if (formData.bcc) mailto += `&bcc=${encodeURIComponent(formData.bcc)}`;
        return mailto;
    };

    const handleSendEmail = (e) => {
        e.preventDefault();
        window.location.href = generateMailtoLink();
    };

    const handleAttachClick = () => {
        alert('Attach functionality is not implemented.');
    };

    const handleCcClick = () => {
        setShowCc(true);
    };

    const handleBccClick = () => {
        setShowBcc(true);
    };

    const handleCloseCc = () => {
        setShowCc(false);
        setFormData({ ...formData, cc: '' });
    };

    const handleCloseBcc = () => {
        setShowBcc(false);
        setFormData({ ...formData, bcc: '' });
    };

    return (
        <section id="contact">
            <Container fluid id="contact">
                <Row className="justify-content-start">
                    <Col xs={12}>
                        <div id="time-date">{currentTime} | {currentDay} | {currentDate}</div>
                        <Form onSubmit={handleSendEmail}>
                            <div className="form-group">
                                <div className="label">To:</div>
                                <div className="field">
                                    <Form.Control type="text" value="Nilesh Kumar" readOnly />
                                    <input type="hidden" name="to" value="nileshkumar.nkmr@gmail.com" />
                                </div>
                                <div id="cc-bcc-buttons">
                                    <Button className={`cc-bcc-button ${showCc ? 'disabled' : ''}`} onClick={handleCcClick}>
                                        Cc
                                    </Button>
                                    <Button className={`cc-bcc-button ${showBcc ? 'disabled' : ''}`} onClick={handleBccClick}>
                                        Bcc
                                    </Button>
                                </div>
                            </div>

                            {showCc && (
                                <div className="form-group">
                                    <div className="label">Cc:</div>
                                    <div className="field">
                                        <Form.Control
                                            type="text"
                                            name="cc"
                                            placeholder="Cc"
                                            value={formData.cc}
                                            onChange={handleChange}
                                        />
                                        <FaTimes className="close-button" onClick={handleCloseCc} />
                                    </div>
                                </div>
                            )}

                            {showBcc && (
                                <div className="form-group">
                                    <div className="label">Bcc:</div>
                                    <div className="field">
                                        <Form.Control
                                            type="text"
                                            name="bcc"
                                            placeholder="Bcc"
                                            value={formData.bcc}
                                            onChange={handleChange}
                                        />
                                        <FaTimes className="close-button" onClick={handleCloseBcc} />
                                    </div>
                                </div>
                            )}

                            <div className="form-group">
                                <div className="label">From:</div>
                                <div className="field">
                                    <Form.Control
                                        type="email"
                                        name="from"
                                        placeholder="Your email"
                                        value={formData.from}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="label">Subject:</div>
                                <div className="field">
                                    <Form.Control
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="field">
                                    <Form.Control
                                        as="textarea"
                                        rows={10}
                                        name="message"
                                        placeholder="Your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="button-group">
                                <Button className="send-button" variant="primary" type="submit">
                                    Send
                                </Button>
                                <Button className="attach-button" onClick={handleAttachClick}>
                                    <FaPaperclip />
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;
