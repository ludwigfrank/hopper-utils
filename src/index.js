import $ from 'jquery';

const updateCountdownPill = (el, start, end) => {
  const now = Date.now();
  const refs = {
    progressBar: $(el).find('.hp-cdp__progress-bar'),
    text: $(el).find('.hp-cdp__text')
  };

  // Countdown starts in the future
  if (now < start) {
  }

  // Countdown is running
  if (now > start && now < end) {
    // Animate the progress bar
  }

  // Countdown is in the past
  if (now > end) {
  }
};
