const router = require("express").Router();
const { Event } = require("../../models");

// CREATE EVENT -> http://localhost:3001/api/events
router.post("/", async (req, res) => {
  // const created_by = 6;
  console.log(req.body);
  try {
    req.body.created_by = req.session.user_id;
    const eventData = await Event.create(req.body);
    res.status(200).json(eventData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE EVENT -> http://localhost:3001/api/events/:id
router.put("/:id", async (req, res) => {
  try {
    const eventData = await Event.update(
      {
        title: req.body.title,
        description: req.body.description,
        cost: req.body.cost,
        capacity: req.body.capacity,
        location: req.body.location,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        created_by: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(eventData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE AN EVENT -> http://localhost:3001/api/events/:id
router.delete("/:id", async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(eventData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
