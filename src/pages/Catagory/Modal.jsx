import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import myContext from "../../../context/data/myContext";

Modal.setAppElement('#root'); // Set your app's root element

function CreateForumModal({ isOpen, onRequestClose }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // คุณสามารถเพิ่มการจัดการการบันทึกข้อมูลที่นี่ เช่น การส่งข้อมูลไปยัง API หรือการอัพเดท state ของ forum
    console.log("New Forum Post:", { title, description });

    // หลังจากบันทึกเสร็จให้กลับไปที่หน้าฟอรัม
    navigate("/normal");
    onRequestClose(); // ปิด modal
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create Forum"
      className="Modal"
      overlayClassName="Overlay"
    >
      <h1 className="text-3xl font-bold text-center mb-5">สร้าง Forum ใหม่</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2">
          <span className="text-gray-700">หัวข้อ:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />
        </label>
        <label className="mb-2">
          <span className="text-gray-700">คำอธิบาย:</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            className="w-full border border-gray-300 p-2 rounded mb-4"
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          บันทึก Forum
        </button>
      </form>
    </Modal>
  );
}

export default CreateForumModal;
