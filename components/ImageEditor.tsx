
import React, { useState, useRef } from 'react';
import { Upload, Wand2, RefreshCcw, Loader2 } from 'lucide-react';
import { editImageWithGemini } from '../geminiService.ts';

const ImageEditor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMimeType(file.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!image || !prompt || loading) return;
    setLoading(true);
    try {
      const edited = await editImageWithGemini(image, prompt, mimeType);
      if (edited) setResult(edited);
    } catch (err) {
      console.error(err);
      alert("Failed to edit image.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setImage(null);
    setResult(null);
    setPrompt('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-6">
      {!image ? (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-slate-200 rounded-3xl h-[200px] flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 hover:bg-purple-50 transition-all group"
        >
          <Upload className="text-slate-400 mb-3 group-hover:text-purple-600 transition-colors" size={32} />
          <p className="text-slate-500 font-medium group-hover:text-purple-700">Upload an image to start</p>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*" 
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-xs font-bold text-slate-400 uppercase">Original</p>
            <div className="aspect-square rounded-2xl overflow-hidden border border-slate-100">
               <img src={image} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-bold text-slate-400 uppercase">Result</p>
            <div className="aspect-square rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center relative">
               {loading ? (
                 <Loader2 className="animate-spin text-purple-600" size={32} />
               ) : result ? (
                 <img src={result} className="w-full h-full object-cover" />
               ) : (
                 <p className="text-slate-400 text-xs text-center p-4 italic">Waiting for your command...</p>
               )}
            </div>
          </div>
        </div>
      )}

      {image && (
        <div className="space-y-4">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g. 'Make it a black and white sketch'..."
              className="flex-grow p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
            <button 
              onClick={handleEdit}
              disabled={loading || !prompt}
              className="px-6 bg-purple-600 text-white rounded-xl hover:bg-purple-700 disabled:opacity-50 transition-all flex items-center gap-2 font-bold"
            >
              <Wand2 size={18} /> Edit
            </button>
          </div>
          <button 
            onClick={reset}
            className="text-slate-400 text-sm flex items-center gap-1 hover:text-slate-600 mx-auto"
          >
            <RefreshCcw size={14} /> Start over
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
