import { useRef, useState } from "react";
import { Upload, Loader2 } from "lucide-react";
import DashboardCard from "../dashboard/Dashboardcard";
import { uploadFile } from "../../services/upload.service";

export default function UploadCard() {
  const [datasetType, setDatasetType] = useState("FIR Records");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBrowse = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setMessage("");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage("Please select a CSV file.");
      return;
    }

    setUploading(true);

    try {
      const response = await uploadFile(selectedFile);

      if (response.success) {
        setMessage("✅ Upload completed successfully.");
        setSelectedFile(null);

     if (fileInputRef.current) {
     fileInputRef.current.value = "";
     }
      } else {
        setMessage("❌ Upload failed.");
      }
    } catch (error) {
      setMessage("❌ Something went wrong.");
    }

    setUploading(false);
  };

  return (
    <DashboardCard title="Upload Dataset">
      <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center">

        <Upload
          size={48}
          className="mx-auto text-blue-400 mb-4"
        />

        <h2 className="text-xl font-semibold">
          Upload Crime Dataset
        </h2>

        <p className="text-slate-400 mt-2">
          Select dataset type and upload a CSV file.
        </p>

        <select
          className="mt-6 w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
          value={datasetType}
          onChange={(e) => setDatasetType(e.target.value)}
        >
          <option>FIR Records</option>
          <option>Accused Records</option>
          <option>Victim Records</option>
          <option>Criminal History</option>
          <option>Financial Transactions</option>
        </select>

        <button
          onClick={handleBrowse}
          className="mt-5 w-full rounded-lg bg-slate-700 py-3 hover:bg-slate-600 transition"
        >
          Browse CSV
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileChange}
        />

        {selectedFile && (
          <div className="mt-5 rounded-lg bg-slate-800 p-4 text-left">
            <p className="font-semibold text-white">
              Selected File
            </p>

            <p className="text-slate-400 mt-1">
              {selectedFile.name}
            </p>

            <p className="text-slate-500 text-sm">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}

        <button
          disabled={!selectedFile || uploading}
          onClick={handleUpload}
          className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {uploading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Uploading...
            </>
          ) : (
            "Upload Dataset"
          )}
        </button>

        {message && (
          <div className="mt-4 text-sm text-green-400">
            {message}
          </div>
        )}
      </div>
    </DashboardCard>
  );
}