
import React, { useState } from 'react';
import type { CommentType } from '../types';

interface CommentSectionProps {
    comments: CommentType[];
    addComment: (name: string, text: string) => void;
    deleteComment: (id: number) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, addComment, deleteComment }) => {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !text.trim()) {
            setError('El nombre y el comentario no pueden estar vacíos.');
            return;
        }
        setError('');
        addComment(name, text);
        setName('');
        setText('');
    };

    const formatTimestamp = (timestamp: string) => {
        return new Date(timestamp).toLocaleString('es-ES', {
            dateStyle: 'medium',
            timeStyle: 'short',
        });
    };

    return (
        <div className="w-full text-left">
            <form onSubmit={handleSubmit} className="mb-6 space-y-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre de explorador"
                    className="w-full p-2.5 bg-slate-800/70 border border-slate-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                    aria-label="Nombre"
                />
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Deja tu mensaje a las estrellas..."
                    rows={4}
                    className="w-full p-2.5 bg-slate-800/70 border border-slate-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                    aria-label="Comentario"
                />
                {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2.5 px-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                >
                    Publicar Mensaje
                </button>
            </form>

            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar" aria-live="polite">
                {comments.length === 0 ? (
                    <p className="text-gray-400 text-center py-4">Aún no hay mensajes en esta galaxia. ¡Sé el primero!</p>
                ) : (
                    comments.map(comment => (
                        <div key={comment.id} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 animate-fade-in" role="article">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-bold text-purple-400">{comment.name}</p>
                                    <p className="text-xs text-gray-500">
                                        <time dateTime={comment.timestamp}>{formatTimestamp(comment.timestamp)}</time>
                                    </p>
                                </div>
                                <button onClick={() => deleteComment(comment.id)} className="text-gray-500 hover:text-red-500 transition-colors" aria-label={`Eliminar comentario de ${comment.name}`}>
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </div>
                            <p className="text-gray-300 mt-2 whitespace-pre-wrap break-words">{comment.text}</p>
                        </div>
                    ))
                )}
            </div>
            <style>
                {`
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in {
                        animation: fade-in 0.5s ease-out forwards;
                    }
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 8px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background-color: #4f46e5;
                        border-radius: 4px;
                        border: 2px solid transparent;
                    }
                     .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background-color: #6366f1;
                    }
                `}
            </style>
        </div>
    );
};

export default CommentSection;
