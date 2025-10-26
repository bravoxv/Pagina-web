import React, { useState } from 'react';
import { generateThankYouMessage } from '../services/geminiService';

const CommentModalContent: React.FC = () => {
    const [comment, setComment] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!comment.trim()) {
            setError('Por favor, escribe un comentario.');
            return;
        }
        setIsLoading(true);
        setError('');
        setResponse('');
        try {
            const message = await generateThankYouMessage(comment);
            setResponse(message);
            setComment('');
        } catch (err) {
            setError('No se pudo conectar con la constelación Gemini. Inténtalo de nuevo.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <form onSubmit={handleSubmit}>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full h-32 p-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-4 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                    {isLoading ? 'Enviando a la galaxia...' : 'Enviar Comentario'}
                </button>
            </form>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {response && (
                <div className="mt-4 p-4 bg-slate-800 border border-green-500/50 rounded-md">
                    <p className="text-green-300 font-semibold">Respuesta de la Nebulosa:</p>
                    <p className="text-white">{response}</p>
                </div>
            )}
        </div>
    );
};

export default CommentModalContent;