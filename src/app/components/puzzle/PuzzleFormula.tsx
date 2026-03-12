"use client";

interface PuzzlePiece {
  number: string;
  title: string;
  content: string;
  short: string;
  color: string;
}

interface PuzzleFormulaProps {
  pieces: PuzzlePiece[];
  result: string;
}

export default function PuzzleFormula({ pieces, result }: PuzzleFormulaProps) {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center justify-center gap-3 flex-wrap text-lg md:text-xl">
          {pieces.map((piece, index) => (
            <div key={index} className="flex items-center gap-3">
              <span 
                className="font-bold px-3 py-1 rounded-lg"
                style={{ 
                  color: piece.color,
                  backgroundColor: `${piece.color}15`
                }}
              >
                {piece.short}
              </span>
              {index < pieces.length - 1 && (
                <span className="text-2xl font-bold text-gray-400">+</span>
              )}
            </div>
          ))}
          <span className="text-2xl font-bold text-gray-400 mx-2">=</span>
          <span className="text-2xl font-bold text-[#ff6b6b] flex items-center gap-2">
            <span>🦞</span>
            OpenClaw
          </span>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg text-[#636e72] leading-relaxed max-w-3xl mx-auto">
          {result}
        </p>
      </div>
    </div>
  );
}
