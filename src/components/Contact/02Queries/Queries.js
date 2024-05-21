"use client";

const contactData = [
  { name: "Govinda's", number: "1234567890" },
  { name: "D' Cafe", number: "1234567890" },
  { name: "Guest House", number: "1234567890" },
  { name: "Youth Classes", number: "1234567890" },
  { name: "Online Classes", number: "1234567890" },
  { name: "Elder Classes", number: "1234567890" },
  { name: "Kids And Teenager Classes", number: "1234567890" },
  { name: "Life Member", number: "1234567890" },
  { name: "Yatra", number: "1234567890" },
  { name: "Other Queries", number: "1234567890" }
];

const Queries = () => {
  return (
    // <div className="w-[">
    <div className="h-[508px] rounded w-full sm:w-[500px] shadow-xl text-white bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 px-4 pt-8">
      <h2 className="text-2xl text-center font-bold mb-5">Queries</h2>
      <table className="w-full">
        <tbody>
          {contactData.map((item, index) => (
            <tr key={index}>
              <td className="py-1.5">{item.name}:</td>
              <td className="text-right">{item.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // </div>
  );
};

export default Queries;
