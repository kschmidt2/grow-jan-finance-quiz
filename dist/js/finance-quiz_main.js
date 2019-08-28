let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";let score=0;function answerQuestion(e){let s=!1;$(e+" .answers li").on("click",function(){s||(s=!0,$(this).parent().addClass("clicked"),"true"==this.dataset.correct?($(this).addClass("correct"),score++,$(e+" .quiz-responses .correct-response").slideDown(200)):"false"==this.dataset.correct&&($(this).addClass("incorrect"),$(e+" .quiz-responses .incorrect-response").slideDown(200)),$(e+" .quiz-responses .response-explanation").slideDown(200),$(e+" .answers li").addClass("no-hover"),$(".answers").length==$(".answers.clicked").length&&($(".quiz-results").slideDown(200),$("#quiz-score").html(score),0==score||1==score?$("#quiz-advice").html("Looks like you would benefit from additional reading."):2==score?$("#quiz-advice").html("You know some things, and we want to help you learn even more."):3==score?$("#quiz-advice").html("You got the same number right as the average person, which is a great start, but we want to help you learn even more."):4==score?$("#quiz-advice").html("You got more questions right than the average person, which is great, but we want to help you learn even more."):5==score?$("#quiz-advice").html("Great job! You know your stuff, but we want to help you learn even more."):6==score&&$("#quiz-advice").html("Perfect! You know your stuff, but we want to help you learn even more.")))})}$(".answers").one("mouseover",function(){answerQuestion("#"+$(this).parent().attr("id"))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0Iiwic2NvcmUiLCJhbnN3ZXJRdWVzdGlvbiIsInF1ZXN0aW9uQ29udGFpbmVyIiwiYW5zd2VyTG9ja2VkIiwiJCIsIm9uIiwidGhpcyIsInBhcmVudCIsImFkZENsYXNzIiwiZGF0YXNldCIsImNvcnJlY3QiLCJzbGlkZURvd24iLCJodG1sIiwib25lIiwiYXR0ciJdLCJtYXBwaW5ncyI6IkFBUUEsSUFBQUEsUUFBQUMsU0FBQUMsdUJBQUEsaUJBQ0FDLFNBQUFGLFNBQUFHLGVBQUEsY0FDQSxJQUFBRCxTQUNBLElBQUEsSUFBQUUsRUFBQSxFQUFBQSxFQUFBTCxRQUFBTSxPQUFBRCxJQUNBTCxRQUFBSyxHQUFBRSxNQUFBQyxXQUFBLE1BcUVBLElBQUFDLE1BQUEsRUFFQSxTQUFBQyxlQUFBQyxHQUNBLElBQUFDLEdBQUEsRUFFQUMsRUFBQUYsRUFBQSxnQkFBQUcsR0FBQSxRQUFBLFdBQ0FGLElBR0FBLEdBQUEsRUFFQUMsRUFBQUUsTUFBQUMsU0FBQUMsU0FBQSxXQUVBLFFBQUFGLEtBQUFHLFFBQUFDLFNBQ0FOLEVBQUFFLE1BQUFFLFNBQUEsV0FDQVIsUUFDQUksRUFBQUYsRUFBQSxzQ0FBQVMsVUFBQSxNQUNBLFNBQUFMLEtBQUFHLFFBQUFDLFVBQ0FOLEVBQUFFLE1BQUFFLFNBQUEsYUFDQUosRUFBQUYsRUFBQSx3Q0FBQVMsVUFBQSxNQUdBUCxFQUFBRixFQUFBLDBDQUFBUyxVQUFBLEtBRUFQLEVBQUFGLEVBQUEsZ0JBQUFNLFNBQUEsWUFHQUosRUFBQSxZQUFBUCxRQUFBTyxFQUFBLG9CQUFBUCxTQUNBTyxFQUFBLGlCQUFBTyxVQUFBLEtBQ0FQLEVBQUEsZUFBQVEsS0FBQVosT0FFQSxHQUFBQSxPQUFBLEdBQUFBLE1BQ0FJLEVBQUEsZ0JBQUFRLEtBQUEseURBQ0EsR0FBQVosTUFDQUksRUFBQSxnQkFBQVEsS0FBQSxrRUFDQSxHQUFBWixNQUNBSSxFQUFBLGdCQUFBUSxLQUFBLHlIQUNBLEdBQUFaLE1BQ0FJLEVBQUEsZ0JBQUFRLEtBQUEsa0hBQ0EsR0FBQVosTUFDQUksRUFBQSxnQkFBQVEsS0FBQSw0RUFDQSxHQUFBWixPQUNBSSxFQUFBLGdCQUFBUSxLQUFBLDhFQU9BUixFQUFBLFlBQUFTLElBQUEsWUFBQSxXQUVBWixlQUFBLElBREFHLEVBQUFFLE1BQUFDLFNBQUFPLEtBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFkZHMgc29jaWFsIGNsYXNzIHRvIGdldCBzb2NpYWwgY2hhcnRcbi8vIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXJ0LWFyZWFcIik7XG4vLyBmb3IodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKylcbi8vIHtcbi8vICAgICBlbGVtZW50W2ldLmNsYXNzTmFtZSArPSBcIiBzb2NpYWxcIjtcbi8vIH1cblxuLy8gYm9sZHMgdGhlIHN1YmhlYWQgaWYgdGhlcmUgaXMgbm8gaGVhZGxpbmVcbmxldCBzdWJoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXJ0LXN1YmhlYWRcIiksXG4gICAgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWhlYWRcIik7XG4gICAgaWYgKCFoZWFkbGluZSkge1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3ViaGVhZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3ViaGVhZFtpXS5zdHlsZS5mb250V2VpZ2h0ID0gXCI2MDBcIjtcbiAgICAgICAgfSAgICAgICBcbiAgICAgfVxuXG5cbi8vIGNvbnN0IG15UXVpeiA9IFtcbi8vICAgICB7XG4vLyAgICAgJ3EnOiAnQSBzYW1wbGUgcXVlc3Rpb24gMT8nLFxuLy8gICAgICdvcHRpb25zJzogW1xuLy8gICAgICAgICAnQW5zd2VyIDEnLFxuLy8gICAgICAgICAnQW5zd2VyIDInLFxuLy8gICAgICAgICAnQW5zd2VyIDMnLFxuLy8gICAgICAgICAnQW5zd2VyIDQnXG4vLyAgICAgXSxcbi8vICAgICAnY29ycmVjdEluZGV4JzogMSxcbi8vICAgICAnY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBjb3JyZWN0IHJlc3BvbnNlLicsXG4vLyAgICAgJ2luY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBpbmNvcnJlY3QgcmVzcG9uc2UuJ1xuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICdxJzogJ0Egc2FtcGxlIHF1ZXN0aW9uIDI/Jyxcbi8vICAgICAnb3B0aW9ucyc6IFtcbi8vICAgICAgICAgJ0Fuc3dlciAxJyxcbi8vICAgICAgICAgJ0Fuc3dlciAyJ1xuLy8gICAgIF0sXG4vLyAgICAgJ2NvcnJlY3RJbmRleCc6IDEsXG4vLyAgICAgJ2NvcnJlY3RSZXNwb25zZSc6ICdDdXN0b20gY29ycmVjdCByZXNwb25zZS4nLFxuLy8gICAgICdpbmNvcnJlY3RSZXNwb25zZSc6ICdDdXN0b20gaW5jb3JyZWN0IHJlc3BvbnNlLidcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAncSc6ICdBIHNtYXBsZSBxdWVzdGlvbiAzPycsXG4vLyAgICAgJ29wdGlvbnMnOiBbXG4vLyAgICAgICAgICdBbnN3ZXIgMScsXG4vLyAgICAgICAgICdBbnN3ZXIgMicsXG4vLyAgICAgICAgICdBbnN3ZXIgMycsXG4vLyAgICAgICAgICdBbnN3ZXIgNCdcbi8vICAgICBdLFxuLy8gICAgICdjb3JyZWN0SW5kZXgnOiAyLFxuLy8gICAgICdjb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGNvcnJlY3QgcmVzcG9uc2UuJyxcbi8vICAgICAnaW5jb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGluY29ycmVjdCByZXNwb25zZS4nXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgJ3EnOiAnQSBzbWFwbGUgcXVlc3Rpb24gND8nLFxuLy8gICAgICdvcHRpb25zJzogW1xuLy8gICAgICAgICAnQW5zd2VyIDEnLFxuLy8gICAgICAgICAnQW5zd2VyIDInXG4vLyAgICAgXSxcbi8vICAgICAnY29ycmVjdEluZGV4JzogMSxcbi8vICAgICAnY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBjb3JyZWN0IHJlc3BvbnNlLicsXG4vLyAgICAgJ2luY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBpbmNvcnJlY3QgcmVzcG9uc2UuJ1xuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICdxJzogJ0Egc21hcGxlIHF1ZXN0aW9uIDU/Jyxcbi8vICAgICAnb3B0aW9ucyc6IFtcbi8vICAgICAgICAgJ0Fuc3dlciAxJyxcbi8vICAgICAgICAgJ0Fuc3dlciAyJyxcbi8vICAgICAgICAgJ0Fuc3dlciAzJyxcbi8vICAgICAgICAgJ0Fuc3dlciA0J1xuLy8gICAgIF0sXG4vLyAgICAgJ2NvcnJlY3RJbmRleCc6IDMsXG4vLyAgICAgJ2NvcnJlY3RSZXNwb25zZSc6ICdDdXN0b20gY29ycmVjdCByZXNwb25zZS4nLFxuLy8gICAgICdpbmNvcnJlY3RSZXNwb25zZSc6ICdDdXN0b20gaW5jb3JyZWN0IHJlc3BvbnNlLidcbi8vICAgICB9XG4vLyBdXG5cbi8vICQoJyNxdWl6JykucXVpeih7XG4vLyAgICAgcXVlc3Rpb25zOiBteVF1aXosXG4vLyAgICAgY291bnRlckZvcm1hdDogJ1F1ZXN0aW9uICVjdXJyZW50IG9mICV0b3RhbCdcbi8vIH0pO1xuXG5sZXQgc2NvcmUgPSAwOyAvL3RvdGFsIHNjb3JlIGZvciBmaW5hbCByZXN1bHRzXG5cbmZ1bmN0aW9uIGFuc3dlclF1ZXN0aW9uKHF1ZXN0aW9uQ29udGFpbmVyKSB7XG4gICAgbGV0IGFuc3dlckxvY2tlZCA9IGZhbHNlIC8vY29udHJvbHMgd2hldGhlciB0aGUgcXVlc3Rpb24gc2hvdWxkIGJlIGxvY2tlZCBhZnRlciBhbnN3ZXJpbmdcblxuICAgICQocXVlc3Rpb25Db250YWluZXIgKyAnIC5hbnN3ZXJzIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKGFuc3dlckxvY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFuc3dlckxvY2tlZCA9IHRydWU7XG5cbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcyhcImNsaWNrZWRcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YXNldC5jb3JyZWN0ID09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiY29ycmVjdFwiKTtcbiAgICAgICAgICAgIHNjb3JlKys7XG4gICAgICAgICAgICAkKHF1ZXN0aW9uQ29udGFpbmVyICsgJyAucXVpei1yZXNwb25zZXMgLmNvcnJlY3QtcmVzcG9uc2UnKS5zbGlkZURvd24oMjAwKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGFzZXQuY29ycmVjdCA9PSBcImZhbHNlXCIpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJpbmNvcnJlY3RcIik7XG4gICAgICAgICAgICAkKHF1ZXN0aW9uQ29udGFpbmVyICsgJyAucXVpei1yZXNwb25zZXMgLmluY29ycmVjdC1yZXNwb25zZScpLnNsaWRlRG93bigyMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgJChxdWVzdGlvbkNvbnRhaW5lciArICcgLnF1aXotcmVzcG9uc2VzIC5yZXNwb25zZS1leHBsYW5hdGlvbicpLnNsaWRlRG93bigyMDApO1xuXG4gICAgICAgICQocXVlc3Rpb25Db250YWluZXIgKyAnIC5hbnN3ZXJzIGxpJykuYWRkQ2xhc3MoJ25vLWhvdmVyJyk7XG5cbiAgICAgICAgLy8gc2hvd3MgJ3NlZSByZXN1bHRzJyBidXR0b24gYWZ0ZXIgYWxsIGZpdmUgcXVlc3Rpb25zIGhhdmUgYmVlbiBhbnN3ZXJlZFxuICAgICAgICBpZiAoJChcIi5hbnN3ZXJzXCIpLmxlbmd0aCA9PSAkKFwiLmFuc3dlcnMuY2xpY2tlZFwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5xdWl6LXJlc3VsdHMnKS5zbGlkZURvd24oMjAwKTtcbiAgICAgICAgICAgICQoJyNxdWl6LXNjb3JlJykuaHRtbChzY29yZSk7XG5cbiAgICAgICAgICAgIGlmIChzY29yZSA9PSAwIHx8IHNjb3JlID09IDEpIHtcbiAgICAgICAgICAgICAgICAkKCcjcXVpei1hZHZpY2UnKS5odG1sKFwiTG9va3MgbGlrZSB5b3Ugd291bGQgYmVuZWZpdCBmcm9tIGFkZGl0aW9uYWwgcmVhZGluZy5cIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3JlID09IDIpIHtcbiAgICAgICAgICAgICAgICAkKCcjcXVpei1hZHZpY2UnKS5odG1sKFwiWW91IGtub3cgc29tZSB0aGluZ3MsIGFuZCB3ZSB3YW50IHRvIGhlbHAgeW91IGxlYXJuIGV2ZW4gbW9yZS5cIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3JlID09IDMpIHtcbiAgICAgICAgICAgICAgICAkKCcjcXVpei1hZHZpY2UnKS5odG1sKFwiWW91IGdvdCB0aGUgc2FtZSBudW1iZXIgcmlnaHQgYXMgdGhlIGF2ZXJhZ2UgcGVyc29uLCB3aGljaCBpcyBhIGdyZWF0IHN0YXJ0LCBidXQgd2Ugd2FudCB0byBoZWxwIHlvdSBsZWFybiBldmVuIG1vcmUuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgJCgnI3F1aXotYWR2aWNlJykuaHRtbChcIllvdSBnb3QgbW9yZSBxdWVzdGlvbnMgcmlnaHQgdGhhbiB0aGUgYXZlcmFnZSBwZXJzb24sIHdoaWNoIGlzIGdyZWF0LCBidXQgd2Ugd2FudCB0byBoZWxwIHlvdSBsZWFybiBldmVuIG1vcmUuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgJCgnI3F1aXotYWR2aWNlJykuaHRtbChcIkdyZWF0IGpvYiEgWW91IGtub3cgeW91ciBzdHVmZiwgYnV0IHdlIHdhbnQgdG8gaGVscCB5b3UgbGVhcm4gZXZlbiBtb3JlLlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2NvcmUgPT0gNikge1xuICAgICAgICAgICAgICAgICQoJyNxdWl6LWFkdmljZScpLmh0bWwoXCJQZXJmZWN0ISBZb3Uga25vdyB5b3VyIHN0dWZmLCBidXQgd2Ugd2FudCB0byBoZWxwIHlvdSBsZWFybiBldmVuIG1vcmUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxufVxuXG4kKCcuYW5zd2VycycpLm9uZSgnbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcbiAgICBsZXQgcGFyZW50RGl2ID0gKCQodGhpcykucGFyZW50KCkuYXR0cignaWQnKSlcbiAgICBhbnN3ZXJRdWVzdGlvbignIycgKyBwYXJlbnREaXYpO1xufSlcbiAgICBcbiJdfQ==
