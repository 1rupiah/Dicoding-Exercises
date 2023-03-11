const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Personal",
          desc:
            "T-shaped personality, a good understanding of technology, business, UI/UX, and data, with a strong understanding for business and design. Data-driven, excellent analytical, and problem-solving skills. Familiar with agile principles and scrum methodology. Teamwork skills with cross-function teams for same vision and goal.",
          photo:
            "https://drive.google.com/uc?id=1e2wkmKhUHQLyyiFWQaSLQJagWWM7Ua8t&export=download"
        },
        {
          id: 2,
          title: "Project",
          desc:
            "Plan and designate project resources, prepare budgets, monitor progress, and keep stakeholders informed the entire way. This is all done within the confines of a company's goals and vision. Project managers are needed on a wide variety of projects, including construction, IT, HR, and marketing.",
          photo:
            "https://images.unsplash.com/photo-1570215171424-f74325192b55?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
        },
        {
          id: 3,
          title: "Product",
          desc:
            "Who identifies the customer need and the larger business objectives that a product or feature will fulfill, articulates what success looks like for a product, and rallies a team to turn that vision into a reality.",
          photo:
            "https://images.unsplash.com/flagged/photo-1550946107-8842ae9426db?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"
        },
        {
          id: 4,
          title: "Geoscientist",
          desc:
            "Help protect the planet by studying it, learning from it, and predicting what the future will bring. They perform environmental assessments and study global environmental systems. We locate water, mineral, and energy resources.",
          photo:
            "https://images.unsplash.com/photo-1598968693552-39a64f9e24f0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1001&amp;q=80"
        }
      ],
      currentNum: 0
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentNum];
    }
  },
  methods: {
    playFoward() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.out"
        },
        onComplete: () => {
          this.playReverse();
          if (this.currentNum >= 3) {
            this.currentNum = 0;
          } else {
            this.currentNum++;
          }
        }
      });
      tl.to("#mask-1", {
        yPercent: 100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: -100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.4"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.3"
        );
    },
    playReverse() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.in"
        }
      });
      tl.to("#mask-1", {
        yPercent: -100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: 100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.2"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.3"
        );
    },
    nextCard() {
      this.playFoward();
    }
  }
}).mount("#app");
