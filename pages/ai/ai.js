Page({
  data: {
    messages: [
      { role: 'ai', content: '你好，我是小彝，有什么可以帮你的吗？' },
    ],
    inputValue: '',
    newVideoSrc: 'cloud://yixiu-4gi4dynk4d8064c8.7969-yixiu-4gi4dynk4d8064c8-1314631262/yixiu/test.mp4', // 初始视频URL
    videoPlaying: false, // 控制视频或图片显示的变量
    videoControls: false // 控制是否显示视频控制条
  },

  onInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },

  sendMessage: function() {
    const userMessage = this.data.inputValue.trim();
    if (userMessage) {
      this.addMessage('user', userMessage);
      this.setData({ inputValue: '' });
      this.handleAIResponse(userMessage);
    }
  },

  addMessage: function(role, content) {
    this.setData({
      messages: [...this.data.messages, { role, content }]
    });
  },
  
  handleAIResponse: function(userMessage) {
    let aiResponse = '';
    let newVideoSrc = '';
    let videoPlaying = false;
    let videoControls = false;

    if (userMessage.includes('天气')) {
      aiResponse = '今天的天气很好，适合外出。';
      newVideoSrc = 'cloud://yixiu-4gi4dynk4d8064c8.7969-yixiu-4gi4dynk4d8064c8-1314631262/yixiu/test.mp4';
      videoPlaying = true;
    } else if (userMessage.includes('你好')) {
      aiResponse = '你好！有什么可以帮你的吗？';
      newVideoSrc = 'cloud://yixiu-4gi4dynk4d8064c8.7969-yixiu-4gi4dynk4d8064c8-1314631262/yixiu/hello.mp4';
      videoPlaying = true;
    } else if (userMessage.includes('彝绣')) {
      aiResponse = '彝绣是中国彝族传统手工刺绣艺术，是彝族文化的重要组成部分。它主要流行于中国西南地区，特别是在云南、贵州和四川等地的彝族聚居区。彝绣以其鲜艳的色彩、独特的纹样和精湛的技艺而闻名，是彝族人民智慧和创造力的结晶。';
      newVideoSrc = 'ccloud://yixiu-4gi4dynk4d8064c8.7969-yixiu-4gi4dynk4d8064c8-1314631262/yixiu/yixiu.mp4';
      videoPlaying = true;
    } else {
      aiResponse = '对不起，我不太明白你说的意思。';
      newVideoSrc = 'cloud://yixiu-4gi4dynk4d8064c8.7969-yixiu-4gi4dynk4d8064c8-1314631262/yixiu/sorry.mp4';
      videoPlaying = true;
    }

    // 清空AI消息，并逐字显示
    this.setData({ newVideoSrc, videoPlaying });
    this.addMessage('ai', ''); 
    this.showTextAnimation(aiResponse, 0);
  },

  // 逐字显示AI消息
  showTextAnimation: function(text, index) {
    if (index < text.length) {
      const messages = this.data.messages;
      const aiMessageIndex = messages.length - 1;
      messages[aiMessageIndex].content += text[index];
      this.setData({ messages });

      setTimeout(() => {
        this.showTextAnimation(text, index + 1);
      }, 100); // 每个字符显示的时间间隔（毫秒）
    }
  },

  // 视频播放结束事件处理
  onVideoEnded: function() {
    this.setData({ videoPlaying: false });
    console.log("photo");
  },
});
