import React from 'react';
import { content } from '../data/content';

let __educationRendered = false;

const Education = () => {
  if (__educationRendered) return null;
  __educationRendered = true;

  const { title, items } = content.education;
  return (
    <section id='education' style={{ marginTop:'2rem', marginBottom:'2rem', width:'100%', display:'flex', justifyContent:'center' }}>
      <div style={{ maxWidth:'1000px', width:'100%' }}>
        <h2 style={{ fontSize:'1.75rem', fontWeight:'bold', marginBottom:'1.5rem', textAlign:'center' }}>{title}</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
          {items.map((edu, idx) => (
            <div key={idx} style={{ backgroundColor:'rgba(255,255,255,0.05)', padding:'1.25rem', borderRadius:'0.75rem', border:'1px solid rgba(255,255,255,0.1)', boxShadow:'0 4px 8px rgba(0,0,0,0.3)' }}>
              <h3 style={{ fontSize:'1.25rem', fontWeight:600, marginBottom:'0.5rem' }}>{edu.institution}</h3>
              {edu.jurusan && <p style={{ margin:'0.25rem 0' }}><strong>Jurusan:</strong> {edu.jurusan}</p>}
              {edu.lokasi && <p style={{ margin:'0.25rem 0' }}><strong>Lokasi:</strong> {edu.lokasi}</p>}
              {edu.periode && <p style={{ margin:'0.25rem 0' }}><strong>Periode:</strong> {edu.periode}</p>}
              {edu.deskripsi && <p style={{ marginTop:'0.5rem' }}>{edu.deskripsi}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
