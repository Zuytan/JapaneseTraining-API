var express = require("express");
var router = express.Router();
var Lesson = require("../schemas/lesson");

router.get("/", function(req, res, next) {
  Lesson.find({ owner: "server" }, (err, lessons) => {
    if (err) {
      res.status(404).json({ error: "error.lesson.notFound" });
    } else {
      const listLessons = lessons.map(lesson => {
        return { id: lesson._id, name: lesson.name };
      });
      res.json({ listLessons });
    }
  });
});

router.post("/lesson/get", function(req, res, next) {
  const { lessonId } = req.body;
  console.log(lessonId);
  Lesson.findById(lessonId, (err, lessonFound) => {
    if (err || !lessonFound) {
      res.status(404).json({ error: "error.lesson.notFound" });
    } else {
      const lesson = {
        id: lessonFound._id,
        name: lessonFound.name,
        vocabulary: lessonFound.vocabulary
      };
      res.json({ lesson });
    }
  });
});

router.post("/lesson/add", function(req, res, next) {
  const { name, vocabulary } = req.body;
  const newLesson = new Lesson({ name, owner: "server", vocabulary });
  newLesson.save(err => {
    if (err) {
      res.status(500).json({ error: "error.server.internal" });
    } else {
      res.json({ lesson: "success.lesson.add" });
    }
  });
});
module.exports = router;
