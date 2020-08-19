const ReservationLocalService = require("../services/reservationLocalService");

async function create(req, res, next) {
  try {
    const data = req.body;
    const newReservation = await ReservationLocalService.create(data);
    return res.json({
      success: true,
      data: newReservation,
    });
  } catch (error) {
    next(error);
  }
}

async function getAll(req, res, next) {
  try {
    const reservations = await ReservationLocalService.getAll();
    res.status(200).json({
      success: true,
      data: reservations,
    });
  } catch (error) {
    next(error);
  }
}

function updateById(req, res, next) {}
function deleteById(req, res, next) {}

module.exports = {
  create,
  getAll,
  updateById,
  deleteById,
};
