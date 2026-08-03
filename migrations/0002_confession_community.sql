-- Shared confession bank + Reddit-style community votes (visible to all users)

CREATE TABLE IF NOT EXISTS confession_bank (
  id TEXT PRIMARY KEY,
  body TEXT NOT NULL UNIQUE,
  style TEXT NOT NULL,
  ups INTEGER NOT NULL DEFAULT 0,
  downs INTEGER NOT NULL DEFAULT 0,
  neutrals INTEGER NOT NULL DEFAULT 0,
  score INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS confession_bank_score_idx ON confession_bank (score DESC, ups DESC);
CREATE INDEX IF NOT EXISTS confession_bank_style_idx ON confession_bank (style);

-- One vote per anonymous voter per confession (1 up, 0 neutral, -1 down)
CREATE TABLE IF NOT EXISTS confession_votes (
  voter_id TEXT NOT NULL,
  confession_id TEXT NOT NULL REFERENCES confession_bank (id) ON DELETE CASCADE,
  vote SMALLINT NOT NULL CHECK (vote IN (-1, 0, 1)),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (voter_id, confession_id)
);

CREATE INDEX IF NOT EXISTS confession_votes_confession_idx ON confession_votes (confession_id);
