"use client";

const Maps = () => {
  return (
    <div className="py-10 sm:p-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.278485730383!2d75.74708597543663!3d26.83109337669586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db57ac44ce2e3%3A0xd3f1209a496907b5!2sISKCON%20Temple%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1715681136297!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
