"use client";

const ContactIcons = () => {
  return (
    <div className="px-10 py-32">
      <div className="flex sm:justify-center sm:flex-row flex-col flex-wrap gap-20">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#d17a29]">
            <img src="/Home/Hero/location.svg" className="h-7" />
          </div>
          <div>
            <h5 className="m-0 mb-1">Visit Us</h5>
            <p className="m-0 text-xs">
              Village Dholai, opposite Vijay Path, <br />
              Mansarovar, Jaipur, Rajasthan 302020
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#d17a29]">
            <img src="/Contact/call.svg" className="h-9" />
          </div>
          <div>
            <h5 className="m-0 mb-1">Call Us</h5>
            <p className="m-0 text-sm">+91 96496 89649</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#d17a29]">
            <img src="/Contact/class.svg" className="h-8" />
          </div>
          <div>
            <h5 className="m-0 mb-1">Gita Classes</h5>
            <p className="m-0 text-xs">
              <b>Youth:</b> +91 6378 588 289
            </p>
            <p className="m-0 text-xs">
              <b>Elders &amp; Kids:</b> +91 6378 588 289
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactIcons;
