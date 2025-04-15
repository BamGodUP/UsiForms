// ./pages/NewRelatorio.jsx
import { useState } from "react";

export default function NewRelatorio({ user }) {
  const [ocorrencias, setOcorrencias] = useState([
    {
      horaInicio: "",
      horaFim: "",
      codParada: "",
      local: "",
      ocorrencia: "",
      medida: "",
      causa: "",
      qualidade: false,
      producao: false,
      velocidade: false,
      atendidoPor: ""
    }
  ]);

  const adicionarOcorrencia = () => {
    setOcorrencias([
      ...ocorrencias,
      {
        horaInicio: "",
        horaFim: "",
        codParada: "",
        local: "",
        ocorrencia: "",
        medida: "",
        causa: "",
        qualidade: false,
        producao: false,
        velocidade: false,
        atendidoPor: ""
      }
    ]);
  };

  const atualizarOcorrencia = (index, campo, valor) => {
    const novaLista = [...ocorrencias];
    novaLista[index][campo] = valor;
    setOcorrencias(novaLista);
  };

  const handleSubmit = () => {
    console.log("Relatório enviado:", ocorrencias);
    alert("Relatório postado com sucesso!");
    setOcorrencias([
      {
        horaInicio: "",
        horaFim: "",
        codParada: "",
        local: "",
        ocorrencia: "",
        medida: "",
        causa: "",
        qualidade: false,
        producao: false,
        velocidade: false,
        atendidoPor: ""
      }
    ]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Novo Relatório</h1>
      {ocorrencias.map((oc, index) => (
        <div key={index} className="mb-6 p-4 bg-gray-100 rounded shadow">
          <div className="grid grid-cols-2 gap-4">
            <input placeholder="Hora Início" value={oc.horaInicio} onChange={(e) => atualizarOcorrencia(index, 'horaInicio', e.target.value)} className="p-2 border rounded" />
            <input placeholder="Hora Fim" value={oc.horaFim} onChange={(e) => atualizarOcorrencia(index, 'horaFim', e.target.value)} className="p-2 border rounded" />
            <input placeholder="Cód. Parada" value={oc.codParada} onChange={(e) => atualizarOcorrencia(index, 'codParada', e.target.value)} className="p-2 border rounded" />
            <input placeholder="Local" value={oc.local} onChange={(e) => atualizarOcorrencia(index, 'local', e.target.value)} className="p-2 border rounded" />
          </div>
          <textarea placeholder="Ocorrência" maxLength={1000} value={oc.ocorrencia} onChange={(e) => atualizarOcorrencia(index, 'ocorrencia', e.target.value)} className="w-full mt-4 p-2 border rounded"></textarea>
          <textarea placeholder="Medida Tomada" maxLength={1000} value={oc.medida} onChange={(e) => atualizarOcorrencia(index, 'medida', e.target.value)} className="w-full mt-2 p-2 border rounded"></textarea>
          <textarea placeholder="Causa Imediata" maxLength={1000} value={oc.causa} onChange={(e) => atualizarOcorrencia(index, 'causa', e.target.value)} className="w-full mt-2 p-2 border rounded"></textarea>
          <div className="flex gap-4 mt-2">
            <label><input type="checkbox" checked={oc.qualidade} onChange={(e) => atualizarOcorrencia(index, 'qualidade', e.target.checked)} /> Perda de Qualidade</label>
            <label><input type="checkbox" checked={oc.producao} onChange={(e) => atualizarOcorrencia(index, 'producao', e.target.checked)} /> Perda de Produção</label>
            <label><input type="checkbox" checked={oc.velocidade} onChange={(e) => atualizarOcorrencia(index, 'velocidade', e.target.checked)} /> Redução de Velocidade</label>
          </div>
          <input placeholder="Atendido por" value={oc.atendidoPor} onChange={(e) => atualizarOcorrencia(index, 'atendidoPor', e.target.value)} className="w-full mt-2 p-2 border rounded" />
        </div>
      ))}
      <button onClick={adicionarOcorrencia} className="bg-yellow-500 text-white px-4 py-2 rounded">Adicionar Nova Ocorrência</button>
      <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded ml-4">Postar Relatório</button>
    </div>
  );
}
