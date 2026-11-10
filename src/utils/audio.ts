// Web Audio API synthesizers for zero-dependency, guaranteed audio playback

class SoundFXEngine {
  private ctx: AudioContext | null = null;
  private bgmInterval: number | null = null;
  private isBgmPlaying: boolean = false;
  private isMuted: boolean = false;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Play an obnoxious alarm sound
  playAlarm(durationMs = 1200) {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const startTime = ctx.currentTime;
      
      for (let i = 0; i < 4; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(880 + (i % 2 === 0 ? 120 : 0), startTime + i * 0.25);
        gain.gain.setValueAtTime(0.15, startTime + i * 0.25);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + i * 0.25 + 0.2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime + i * 0.25);
        osc.stop(startTime + i * 0.25 + 0.22);
      }
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Play funny buzzer / wrong sound
  playBuzzer() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Play party horn / celebration chime
  playCheer() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.18, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.55);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Play comical airhorn
  playAirHorn() {
    if (this.isMuted) return;
    try {
      const ctx = this.initCtx();
      const blasts = [0, 0.14, 0.28];
      blasts.forEach(start => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(466.16, ctx.currentTime + start); // Bb4
        gain.gain.setValueAtTime(0.2, ctx.currentTime + start);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + start + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + start);
        osc.stop(ctx.currentTime + start + 0.12);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Ambient Happy Birthday Lo-fi / Chiptune Melodic BGM
  toggleBGM(onStateChange?: (playing: boolean) => void) {
    if (this.isBgmPlaying) {
      this.stopBGM();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      this.startBGM();
      if (onStateChange) onStateChange(true);
      return true;
    }
  }

  startBGM() {
    this.initCtx();
    this.isBgmPlaying = true;
    
    // Melodic notes for "Happy Birthday" (Key of C / F)
    // Notes: C C D C F E | C C D C G F | C C C(high) A F E D | Bb Bb A F G F
    const melody = [
      { note: 261.63, dur: 0.35, pause: 0.1 }, // C4
      { note: 261.63, dur: 0.25, pause: 0.1 }, // C4
      { note: 293.66, dur: 0.6, pause: 0.1 },  // D4
      { note: 261.63, dur: 0.6, pause: 0.1 },  // C4
      { note: 349.23, dur: 0.6, pause: 0.1 },  // F4
      { note: 329.63, dur: 1.1, pause: 0.2 },  // E4

      { note: 261.63, dur: 0.35, pause: 0.1 }, // C4
      { note: 261.63, dur: 0.25, pause: 0.1 }, // C4
      { note: 293.66, dur: 0.6, pause: 0.1 },  // D4
      { note: 261.63, dur: 0.6, pause: 0.1 },  // C4
      { note: 392.00, dur: 0.6, pause: 0.1 },  // G4
      { note: 349.23, dur: 1.1, pause: 0.2 },  // F4

      { note: 261.63, dur: 0.35, pause: 0.1 }, // C4
      { note: 261.63, dur: 0.25, pause: 0.1 }, // C4
      { note: 523.25, dur: 0.6, pause: 0.1 },  // C5
      { note: 440.00, dur: 0.6, pause: 0.1 },  // A4
      { note: 349.23, dur: 0.6, pause: 0.1 },  // F4
      { note: 329.63, dur: 0.6, pause: 0.1 },  // E4
      { note: 293.66, dur: 1.0, pause: 0.2 },  // D4

      { note: 466.16, dur: 0.35, pause: 0.1 }, // Bb4
      { note: 466.16, dur: 0.25, pause: 0.1 }, // Bb4
      { note: 440.00, dur: 0.6, pause: 0.1 },  // A4
      { note: 349.23, dur: 0.6, pause: 0.1 },  // F4
      { note: 392.00, dur: 0.6, pause: 0.1 },  // G4
      { note: 349.23, dur: 1.4, pause: 0.8 },  // F4
    ];

    let noteIdx = 0;
    const playNextNote = () => {
      if (!this.isBgmPlaying || !this.ctx || this.isMuted) return;

      const item = melody[noteIdx];
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(item.note, this.ctx.currentTime);

        // Soft, pleasant lofi synth envelope
        gain.gain.setValueAtTime(0, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + item.dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + item.dur);
      } catch (e) {
        console.warn(e);
      }

      noteIdx = (noteIdx + 1) % melody.length;
      const totalWait = (item.dur + item.pause) * 1000;
      this.bgmInterval = window.setTimeout(playNextNote, totalWait);
    };

    playNextNote();
  }

  stopBGM() {
    this.isBgmPlaying = false;
    if (this.bgmInterval) {
      clearTimeout(this.bgmInterval);
      this.bgmInterval = null;
    }
  }

  getBgmStatus() {
    return this.isBgmPlaying;
  }
}

export const sound = new SoundFXEngine();

