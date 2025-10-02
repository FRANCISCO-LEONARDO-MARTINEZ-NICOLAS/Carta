import { useEffect, useRef, useState } from 'react';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galaxyContainerRef = useRef<HTMLDivElement>(null);
  const [showMessages, setShowMessages] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
      
      // Prevenir zoom y movimiento en móvil
      if (isMobileDevice) {
        document.addEventListener('touchmove', (e) => {
          if (!(e.target as Element).closest('.love-letter')) {
            e.preventDefault();
          }
        }, { passive: false });
        
        document.addEventListener('gesturestart', (e) => e.preventDefault());
        document.addEventListener('gesturechange', (e) => e.preventDefault());
        
        // Prevenir zoom con doble tap excepto en la carta
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (e) => {
          const now = new Date().getTime();
          if (now - lastTouchEnd <= 300) {
            if (!(e.target as Element).closest('.love-letter')) {
              e.preventDefault();
            }
          }
          lastTouchEnd = now;
        }, false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!showMessages) return;
    const container = containerRef.current;
    if (!container) return;

    const texts = [
      "Te Amo",
      "My love",
      "Eres preciosa",
      "Me encantas",
      "Montes😘",
      "Amor de mi vida",
      "Andrea 👑",
      "Para Ti ❤️",
      "Yarizet👑",
      "Eres mi sol ☀️",
      "Tecotl✨",
      "Andrea Yarizet",
      "Mi amor",
      "Forever",
      "Siempre juntos"
    ];

    const emojis = ["🌻", "🌹", "🌷", "🥰", "😍", "😘", "💕", "💖", "✨", "🌸"];
    const images = ["/Andy1.jpg", "/Andy2.jpg", "/Flores.jpg"];

    // Ajustar número de mensajes según el dispositivo
    const messageCount = isMobile ? 20 : 35;

    for (let i = 0; i < messageCount; i++) {
      const randomType = Math.random();
      const element = document.createElement('div');
      element.classList.add('floating-item');

      if (randomType > 0.7) {
        // Mostrar imagen sola (como emoji)
        element.classList.add('image-item');
        element.innerHTML = `<img src="${images[Math.floor(Math.random() * images.length)]}" alt="Momento especial" class="floating-image" />`;
      } else if (randomType > 0.4) {
        // Mostrar emoji
        element.classList.add('emoji-item');
        element.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      } else {
        // Mostrar texto
        element.innerText = texts[Math.floor(Math.random() * texts.length)];
      }

      const startX = Math.random() * 100 + 15;
      const startY = 100 + Math.random() * 20;
      const duration = Math.random() * 5 + 5;
      const delay = Math.random() * 25;
      const randomXFactor = Math.random() * 2 - 1;

      element.style.left = `${startX}vw`;
      element.style.top = `${startY}vh`;
      element.style.setProperty('--duration', `${duration}s`);
      element.style.setProperty('--delay', `${delay}s`);
      element.style.setProperty('--random-x', `${randomXFactor}`);

      container.appendChild(element);
    }
  }, [showMessages]);

  return (
    <div 
      ref={galaxyContainerRef}
      className={`galaxy-container ${isMobile ? 'mobile-fixed' : ''}`}
    >
      <div className="header">
        <span>TE AMO</span>
        <span className="heart-icon">❤️</span>
        <span>ANDREA</span>
        <span className="heart-icon">💕</span>
        <span></span>
      </div>

      <div ref={containerRef} className="animation-container"></div>

      <div className="code-snippet">
        <pre>
          <code>
            <span className="keyword">const</span> <span className="variable">cartaDeAmor</span> = &#123;
            {`\n`}  <span className="property">de</span>: <span className="string">"Leonardo"</span>,
            {`\n`}  <span className="property">para</span>: <span className="string">"Andrea"</span>,
            {`\n`}  <span className="property">mensaje</span>:
          </code>
        </pre>
        {!showMessages ? (
          <button
            onClick={() => setShowMessages(true)}
            className="message-button"
          >
            Ver Mensaje ❤️
          </button>
        ) : (
          <div className="love-letter">
            <pre>
              <code>
                <span className="string">
                  "Mi amorcito hermoso:{`\n\n`}
                  Desde que llegaste a mi vida, todo cambió. Antes los días eran normales, iguales, pero ahora cada uno de ellos tiene un brillo diferente porque estás tú. Es increíble cómo logras que hasta lo más sencillo se convierta en algo especial: una palabra tuya, una sonrisa, una mirada… todo tiene la magia de hacerme sentir que el mundo es más bonito a tu lado.{`\n\n`}
                  Quiero que sepas que eres lo mejor que me ha pasado, que eres mi lugar seguro, mi paz, mi alegría y mi sueño hecho realidad. No importa lo que pase ni las pruebas que la vida nos ponga, yo estaré siempre contigo, porque contigo quiero caminar todos mis caminos, sostener tu mano en los momentos felices y también en los difíciles.{`\n\n`}
                  A veces pienso que me quedo corto con las palabras, que ninguna alcanza para describir lo mucho que te amo. Eres esa razón por la que sonrío de repente, la causa de mis pensamientos más tiernos, la inspiración que me impulsa a ser mejor. No sabes cuánto me emociona imaginar nuestro futuro juntos: despertar a tu lado, compartir locuras, apoyarnos en cada meta y reírnos hasta que duela la panza.{`\n\n`}
                  Te prometo que siempre voy a cuidarte, a respetarte, a escucharte y a luchar por ti, porque eres la persona con la que quiero escribir mi historia. No quiero un final feliz, porque contigo no hay final, quiero un 'para siempre'.{`\n\n`}
                  Gracias por ser quien eres, por regalarme tu tiempo, tu cariño, tu risa y tu amor. Si pudiera, llenaría el cielo de estrellas con tu nombre, para que cada vez que lo mires recuerdes que mi amor por ti es tan infinito como el universo.{`\n\n`}
                  Hoy, mañana y todos los días, quiero que recuerdes algo: te amo con cada parte de mí, con cada pensamiento, con cada suspiro. Te amo aquí, ahora, y te amaré siempre.{`\n\n`}
                  Con todo mi amor y con mi corazón latiendo solo por ti,{`\n`}
                  Tu eterno enamorado. ❤️"
                </span>
              </code>
            </pre>
          </div>
        )}
        <pre>
          <code>
            &#125;;
          </code>
        </pre>
      </div>
    </div>
  );
}

export default App;
